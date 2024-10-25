import { Component, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular';

@Component({
  selector: 'ns-html-view',
  templateUrl: './component.html',
  standalone: true,
  imports: [NativeScriptCommonModule],
  schemas: [NO_ERRORS_SCHEMA]
})
export class HtmlViewComponent {

  // #region example
  htmlString = `
  <h1 style="color: black; font-family: ui-sans-serif, system-ui;">
    <span style="color: #65adf1;">Html</span>View
  </h1>
  `
  // #endregion example
}
