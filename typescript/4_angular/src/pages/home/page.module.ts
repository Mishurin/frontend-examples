import { route } from './router.config';
import * as angular from 'angular';
import { PageComponent } from './page.component';

export const name = 'Home';

angular.module(name, ['ui.router'])
    .component('home', new PageComponent())
    .config(route);

