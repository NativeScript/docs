import { Component, inject, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule, RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'ns-action-bar',
  templateUrl: './component.html',
  imports: [NativeScriptCommonModule],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ActionBarComponent { 

  // #region example
  router = inject(RouterExtensions);

  goBack() {
    this.router.back();
  }
  // #endregion example
}
