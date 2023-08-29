/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

import {
  Application,
  Frame
} from '@nativescript/core'
import './deeplinks'
import { openDemo } from './utils/demo'
import { disableDemoMode, enableDemoMode } from './utils/demoMode'

Application.on('deeplink', (args: any) => {
  console.log('Got a deeplink: ' + args.url)
  const [, actionFull] = args.url.split('://')
  const [action, ...actionArgs] = actionFull.split('/')
  console.log('Action: ' + action)
  console.log('Action args: ' + actionArgs)

  let handled = true
  switch (action) {
    case 'enableDemoMode': {
      enableDemoMode()
      break
    }
    case 'disableDemoMode': {
      disableDemoMode()
      break
    }

    case 'navigate': {
      // ./ui/ActivityIndicator/template.xml
      const path = actionArgs.join('/')
      openDemo(path);
    }

    case 'navigateBack': {
      const frame = Application.getRootView() as Frame
      if (frame.canGoBack()) {
        frame.goBack()
      }
    }

    default: {
      handled = false
      break
    }
  }

  args.handled = handled
})

// Application.iOSApplication.delegate =

Application.run({ moduleName: 'app-root' })

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
