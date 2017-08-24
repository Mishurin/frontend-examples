import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';
import { DemoDirDirective } from './demo-dir.directive';
import { DemoDirParentComponent } from './demo-dir-parent.component';
import { DemoConsumerComponent } from './demo-consumer.component';
import { DemoSrvService } from './demo-srv.service';

@NgModule({
  imports: [
    NgCommonModule
  ],
  declarations: [DemoDirDirective, DemoDirParentComponent, DemoConsumerComponent],
  exports: [DemoDirParentComponent, DemoConsumerComponent],
  providers: [DemoSrvService]
})
export class CommonModule { }
