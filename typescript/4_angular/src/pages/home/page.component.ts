export class PageComponent implements ng.IComponentOptions {
    controller: ng.IControllerConstructor;
    controllerAs: string;
    template: string;
    constructor() {
        this.template = require('./page.html');
        this.controllerAs  = '$homePageCtrl';
        this.controller = PageController;
    }
};

class PageController implements ng.IComponentController {
    greeting: string = 'Welcome!!!';
}