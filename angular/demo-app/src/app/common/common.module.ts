import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';
import { DemoDirDirective } from './demo-dir.directive';
import { DemoDirParentComponent } from './demo-dir-parent.component';

@NgModule({
  imports: [
    NgCommonModule
  ],
  declarations: [DemoDirDirective, DemoDirParentComponent],
  exports: [DemoDirParentComponent]
})
export class CommonModule { }
