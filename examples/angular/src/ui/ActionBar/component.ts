import { Component, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular';
import { ActionBarPageComponent } from './page.component';

@Component({
  selector: 'ns-action-bar',
  templateUrl: './component.html',
  standalone: true,
  imports: [NativeScriptCommonModule, ActionBarPageComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ActionBarComponent { }
