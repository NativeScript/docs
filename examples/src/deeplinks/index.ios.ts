import { Application } from '@nativescript/core'

@NativeClass()
class CustomUIApplicationDelegate extends UIResponder {
  public static ObjCProtocols = [UIApplicationDelegate]
}

// setup app delegate
let delegate: any = Application.ios.delegate
if (!delegate) {
  delegate = Application.ios.delegate = CustomUIApplicationDelegate
}

/**
 * Add delegate method handler, but also preserve any existing one.
 */
function addDelegateHandler(
  classRef: Function,
  methodName: string,
  handler: Function
) {
  const crtHandler = classRef.prototype[methodName]
  classRef.prototype[methodName] = function () {
    const args = Array.from(arguments)
    if (crtHandler) {
      const result = crtHandler.apply(this, args)
      args.push(result)
    }

    return handler.apply(this, args)
  }
}

addDelegateHandler(
  delegate,
  'applicationOpenURLOptions',
  (_app, url, _options) => {
    let handled = false
    if (url) {
      const args = {
        eventName: 'deeplink',
        object: Application.ios,
        url: url.absoluteString,
        handled: false,
      }
      Application.notify(args)
      handled = args.handled
    }
    return handled
  }
)
