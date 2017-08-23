import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { DemoCmpComponent } from './demo-cmp/demo-cmp.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoCmpComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



import * as ng from 'angular';
import { DemoCmpComponent as OldDemoCmpComponent } from './demo-cmp/old/demo-cmp.component';
ng.module('MyApp', ['demo']);

let bootstrap = () => {
    ng.bootstrap(document.getElementById('a1'), ['MyApp']);
}

ng.module('demo', [])
  .component('demoCmpOld', new OldDemoCmpComponent());

ng.element(<any>bootstrap);