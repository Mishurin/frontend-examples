const linkFn: ng.IDirectiveLinkFn = (
    scope: ng.IScope, 
    el: JQuery, attrs: ng.IAttributes,
    ctrl: ng.IController,
    transclude: ng.ITranscludeFunction
) => {
}
export class DemoDirDirective implements ng.IDirective {
    restrict = 'E';
    scope = {
        everySecond: '=',
        five5Secs: '=',
    }
    link = linkFn;
    template =  `
        Hello {{ $demoDirCtrl.prop }}
    `;
    controllerAs = '$demoDirCtrl'
    controller = DemoDirDirectiveCtrl;
}

interface DemoDirDirectiveScope extends ng.IScope {
    everySecond: Function,
    five5Secs: Function
}

class DemoDirDirectiveCtrl implements ng.IController {
    static $inject = ['$window', '$scope']
    prop = 'World';
    constructor(public $window: ng.IWindowService, public $scope: DemoDirDirectiveScope) {
        setInterval(() => {
            this.$scope.everySecond('second');
        }, 1000);
        setInterval(() => {
            this.$scope.five5Secs('five seconds');
        }, 5000);
    }
    $onInit() {
        console.log('Directive controller initialized', this.$window.location);
    }
}