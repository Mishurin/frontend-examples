export class DemoCmpComponent implements ng.IComponentOptions {
    template = '<span class="greeting">{{ $demoCmpCtrl.greeting }} {{ $demoCmpCtrl.title }}</span>';
    controller = DemoCmpController;
    controllerAs = '$demoCmpCtrl';
    bindings = {
        greeting: '@'
    };
}
class DemoCmpController implements ng.IComponentController {
    static $inject = ['$window'];
    title = 'World';
    constructor(public window: ng.IWindowService) {}
    $onInit() {
        console.log('Old Demo Component Initialized', this.window.location);
    }
    $onDestroy() {
        console.log('Old Demo Component Destroyed');
    }
}