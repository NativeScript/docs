const { execSync } = require('child_process')
module.exports = function afterInstall() {
  // enable demo mode allowed
  execSync(`adb shell settings put global sysui_demo_allowed 1`)

  // grant permission to handle demo mode
  execSync(
    `adb shell pm grant org.nativescript.examplesApp android.permission.DUMP`
  )
}
