import * as ng from 'angular';
import { name as homeModuleName } from './pages/home/page.module';

ng.module('MyApp', ['ui.router', homeModuleName])

let bootstrap = () => {
    ng.bootstrap(document, ['MyApp']);
}

ng.element(<any>bootstrap);