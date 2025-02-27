import { Component, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular';
import { Button, ContentView, CoreTypes, EventData, GridLayout, Label, Page } from '@nativescript/core';

@Component({
  selector: 'ns-view-origin',
  templateUrl: './component.html',
  imports: [NativeScriptCommonModule],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ViewOriginComponent { 

  customX = 0;
  customY = 0;

  currentOrigin = '';
  playing = false;

  page: Page;
  originSelector: GridLayout;
  box: GridLayout;

  wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  navigatingTo(args: EventData) {
    this.page = <Page>args.object;
    this.originSelector = this.page.getViewById('originSelector') as GridLayout;
    this.box = this.page.getViewById('box') as GridLayout;
    
    // allow custom origin to be visible outside of the box
    this.box.on('loaded', (args) => {
      if (__ANDROID__) {
        ;(args.object as GridLayout).android.getParent().setClipChildren(false)
      }
    })
  
    this.changeOrigin('origin_0_0');
  }

  customXValueChange(x: number) {
    this.customX = x;
    this.changeCustomOrigin();
  }

  customYValueChange(y: number) {
    this.customY = y;
    this.changeCustomOrigin();
  }

  changeCustomOrigin() {
    const x = (this.customX / 100) * 10 / 10;
    const y = (this.customY / 100) * 10 / 10;
    this.changeOrigin(`origin_${x}_${y}`);
  }

  changeOrigin(targetOrigin: string) {

    console.log(targetOrigin);

    const customOrigin = this.page.getViewById('customOrigin') as GridLayout
    const current = this.page.getViewById(this.currentOrigin) as ContentView

    if (current) {
      current.backgroundColor = '#94a3b8'
    }

    const next = this.page.getViewById(targetOrigin) as ContentView
    const [_, x, y] = targetOrigin.split('_')
    this.box.originX = +x
    this.box.originY = +y

    // iOS shifts the view when origin is set??
    if (__IOS__) {
      this.box.translateX = this.box.originX * 200
      this.box.translateY = this.box.originY * 200
    }

    if (next) {
      customOrigin.visibility = 'collapse';
      next.backgroundColor = '#fb7185';
      this.customX = +x * 100;
      this.customY = +y * 100;
    } else {
      customOrigin.visibility = 'visible';
      customOrigin.translateX = this.box.originX * 192;
      customOrigin.translateY = this.box.originY * 192;
    }

    this.currentOrigin = targetOrigin

    // update button backgrounds
    this.originSelector.eachChild((child) => {
      if (child instanceof Label) {
        const selected = (child as any).targetOrigin === targetOrigin
        child.backgroundColor = selected ? '#fb7185' : '#f1f5f9'
        child.color = (selected ? '#f1f5f9' : '#334155') as any
      }
      return true
    })
  }

  async play() {
    if (this.playing) return
    this.playing = true
      await this.box.animate({
        rotate: 20,
        duration: 400,
        curve: CoreTypes.AnimationCurve.easeOut,
      })
      await this.wait(200)
      await this.box.animate({
        rotate: 0,
        duration: 400,
        curve: CoreTypes.AnimationCurve.easeIn,
      })
      this.playing = false
  }
}
