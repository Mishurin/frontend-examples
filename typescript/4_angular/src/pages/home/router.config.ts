import {StateProvider} from '@uirouter/angularjs'
    export function route($stateProvider: StateProvider) {
        $stateProvider.state({
            name: 'home',
            url: '',
            template: '<home></home>'
        });
}