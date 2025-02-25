import {
  Application,
  Color,
  Frame,
  GridLayout,
  Label,
  Page,
} from '@nativescript/core'

export function openDemo(path: string) {
  const frame = Application.getRootView() as Frame
  try {
    frame.navigate({
      moduleName: `./ui/${path}/template.xml`,
      clearHistory: true,
    })
  } catch (err) {
    frame.navigate({
      clearHistory: true,
      create() {
        const page = new Page()
        const layout = new GridLayout()
        layout.style.padding = 24

        const label = new Label()

        label.text = err.toString()
        label.textWrap = true
        label.color = new Color('red')

        layout.addChild(label)
        page.content = layout
        return page
      },
    })
  }
}
