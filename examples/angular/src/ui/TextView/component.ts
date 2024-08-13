import { Component, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular';

@Component({
  selector: 'ns-text-view',
  templateUrl: './component.html',
  standalone: true,
  imports: [NativeScriptCommonModule],
  schemas: [NO_ERRORS_SCHEMA]
})
export class TextViewComponent { 

  // #region example
  text = `TextView\nWith\nMultiple\nLines!`;
  // #endregion example
}
