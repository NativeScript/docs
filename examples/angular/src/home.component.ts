import { Component, inject, NO_ERRORS_SCHEMA, signal } from '@angular/core'
import { NativeScriptCommonModule, RouterExtensions } from '@nativescript/angular'
import { getComponentList } from '@example/utils';

@Component({
  selector: 'ns-home',
  templateUrl: './home.component.html',
  imports: [NativeScriptCommonModule],
  schemas: [NO_ERRORS_SCHEMA]
})
export class HomeComponent {
  router = inject(RouterExtensions)
  examples: Array<{ name: string }> = [];

  constructor() {
    // @ts-expect-error (Note: require.context *must* be inline regex)
    this.examples = getComponentList(require.context('./ui/', true, /component\.html$/), '/component.html')
  }

  itemTap(args) {
    const example = this.examples[args.index]
    console.log('example:', example)
    this.router.navigate(['/ui', example.name])
  }
}
