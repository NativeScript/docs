import { Application } from '@nativescript/core'

function setDemoFlag(command: string, ...args: [string, string][]) {
  const intent = new android.content.Intent()
  intent.setAction('com.android.systemui.demo')
  intent.putExtra('command', command)
  for (const [key, value] of args) {
    intent.putExtra(key, value)
  }
  Application.android.nativeApp.sendBroadcast(intent)
}

export function enableDemoMode() {
  if (global.isIOS) {
    // set the status bar  time to 9:41, full battery and full wifi/cellular
    SDStatusBarManager.sharedInstance().enableOverrides()
  } else if (global.isAndroid) {
    setDemoFlag('enter')
    setDemoFlag('clock', ['hhmm', '0941'])
    setDemoFlag('battery', ['level', '100'])
    setDemoFlag('battery', ['plugged', 'false'])
    setDemoFlag('notifications', ['visible', 'false'])
    setDemoFlag('network', ['wifi', 'show'], ['level', '4'])
    setDemoFlag(
      'network',
      ['mobile', 'show'],
      ['datatype', 'none'],
      ['level', '4']
    )
  }
}

export function disableDemoMode() {
  if (global.isIOS) {
    SDStatusBarManager.sharedInstance().disableOverrides()
  } else if (global.isAndroid) {
    setDemoFlag('exit')
  }
}
