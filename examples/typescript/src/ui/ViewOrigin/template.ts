import {
  Animation,
  Button,
  ContentView,
  CoreTypes,
  EventData,
  GridLayout,
  Label,
  Page,
  fromObject,
} from '@nativescript/core'

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export function navigatingTo(args: EventData) {
  const page = <Page>args.object
  const vm = (page.bindingContext = fromObject({
    customX: 0,
    customY: 0,
  }))

  const originSelector = page.getViewById('originSelector') as GridLayout
  const play = page.getViewById('play') as Button
  const box = page.getViewById('box') as GridLayout
  const customOrigin = page.getViewById('customOrigin') as GridLayout

  // allow custom origin to be visible outside of the box
  box.on('loaded', (args) => {
    if (__ANDROID__) {
      ;(args.object as GridLayout).android.getParent().setClipChildren(false)
    }
  })

  let currentOrigin = ''

  vm.on('propertyChange', (args) => {
    const x = +(+args.object.get('customX') / 100).toFixed(2)
    const y = +(+args.object.get('customY') / 100).toFixed(2)
    changeOrigin(`origin_${x}_${y}`)
  })

  function changeOrigin(targetOrigin: string) {
    const current = page.getViewById(currentOrigin) as ContentView
    if (current) {
      current.backgroundColor = '#94a3b8'
    }

    const next = page.getViewById(targetOrigin) as ContentView
    const [_, x, y] = targetOrigin.split('_')
    box.originX = +x
    box.originY = +y

    // iOS shifts the view when origin is set??
    if (__IOS__) {
      box.translateX = box.originX * 200
      box.translateY = box.originY * 200
    }

    if (next) {
      customOrigin.visibility = 'collapse'
      next.backgroundColor = '#fb7185'
      vm.set('customX', +x * 100)
      vm.set('customY', +y * 100)
    } else {
      customOrigin.visibility = 'visible'
      customOrigin.translateX = box.originX * 192
      customOrigin.translateY = box.originY * 192
    }

    currentOrigin = targetOrigin

    // update button backgrounds
    originSelector.eachChild((child) => {
      if (child instanceof Label) {
        const selected = (child as any).targetOrigin === targetOrigin
        child.backgroundColor = selected ? '#fb7185' : '#f1f5f9'
        child.color = (selected ? '#f1f5f9' : '#334155') as any
      }
      return true
    })
  }

  originSelector.eachChild((child) => {
    child.on('tap', (args) => {
      const targetOrigin = (args.object as any).targetOrigin
      if (!targetOrigin) return

      changeOrigin(targetOrigin)
    })
    return true
  })

  changeOrigin('origin_0_0')

  let playing = false

  play.on('tap', async () => {
    if (playing) return
    playing = true
    await box.animate({
      rotate: 20,
      duration: 400,
      curve: CoreTypes.AnimationCurve.easeOut,
    })
    await wait(200)
    await box.animate({
      rotate: 0,
      duration: 400,
      curve: CoreTypes.AnimationCurve.easeIn,
    })
    playing = false
  })
}
