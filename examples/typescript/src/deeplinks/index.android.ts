import { Application } from '@nativescript/core'

Application.android.on(Application.android.activityNewIntentEvent, (args) => {
  const intent: android.content.Intent = args.activity.getIntent()
  try {
    const data = intent.getData()
    if (!data) {
      return // nothing to do
    }

    const args = {
      eventName: 'deeplink',
      object: Application.android,
      url: data.toString(),
      handled: false,
    }
    Application.notify(args)
  } catch (e) {
    console.error(e)
  }
})
