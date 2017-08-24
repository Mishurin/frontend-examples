import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { CommonModule as LocalCommonModule } from './common/common.module';

import { AppComponent } from './app.component';
import { DemoCmpComponent } from './demo-cmp/demo-cmp.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoCmpComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    LocalCommonModule
  ],
  // exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// Angular 1 section
import * as ng from 'angular';
import { DemoCmpComponent as OldDemoCmpComponent } from './demo-cmp/old/demo-cmp.component';
import { DemoDirParentComponent } from './common/old/demo-dir-parent.component';
import { DemoDirDirective } from './common/old/demo-dir.directive';

ng.module('MyApp', ['demo']);

let bootstrap = () => {
    ng.bootstrap(document.getElementById('a1'), ['MyApp']);
}

ng.module('demo', [])
  .component('demoCmpOld', new OldDemoCmpComponent())
  .component('demoDirParentOld', new DemoDirParentComponent())
  .directive('demoDirOld', () => new DemoDirDirective());

ng.element(<any>bootstrap);