import { Component, inject, NO_ERRORS_SCHEMA } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { NativeScriptCommonModule } from '@nativescript/angular';

@Component({
  selector: 'ns-button',
  templateUrl: './component.html',
  imports: [NativeScriptCommonModule],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ButtonComponent {
  activeRoute = inject(ActivatedRoute);
  
}
