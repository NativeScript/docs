import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';

@Component({
  selector: 'ns-list-view',
  templateUrl: './component.html',
  imports: [NativeScriptCommonModule],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ListViewComponent {
  
  // #region example
  items = Array.from({ length: 100 }).map((_, i) => ({
    title: `Item ${i}`,
  }));
  // #endregion example
 }
