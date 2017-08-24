import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CommonModule as LocalCommonModule } from './common/common.module';

import { AppComponent } from './app.component';
import { DemoCmpComponent } from './demo-cmp/demo-cmp.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    DemoCmpComponent,
    HomeComponent,
    ContactsComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
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
import '@uirouter/angularjs';
import { DemoCmpComponent as OldDemoCmpComponent } from './demo-cmp/old/demo-cmp.component';
import { DemoDirParentComponent } from './common/old/demo-dir-parent.component';
import { DemoDirDirective } from './common/old/demo-dir.directive';
import { StateProvider } from '@uirouter/angularjs';
import { DemoSrvService } from './common/old/demo-srv.service';
import { DemoConsumerComponent } from './common/old/demo-consumer.component';

ng.module('MyApp', ['demo']);

let bootstrap = () => {
  ng.bootstrap(document.getElementById('a1'), ['MyApp']);
}

ng.module('demo', ['ui.router'])
  .component('demoCmpOld', new OldDemoCmpComponent())
  .component('demoDirParentOld', new DemoDirParentComponent())
  .component('demoConsumerOld', new DemoConsumerComponent())
  .service('demoSrvOld', DemoSrvService)
  .directive('demoDirOld', () => new DemoDirDirective())
  .config(($stateProvider: StateProvider, $locationProvider: ng.ILocationProvider) => {
    $locationProvider.html5Mode(true);
    $stateProvider.state({
      name: 'home',
      url: '/',
      template: 'old Home'
    });
    $stateProvider.state({
      name: 'contacts',
      url: '/contacts',
      template: 'old Contacts'
    });
  });

ng.element(<any>bootstrap);