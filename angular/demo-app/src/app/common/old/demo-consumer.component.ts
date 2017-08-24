import { DemoSrvService } from './demo-srv.service';

export class DemoConsumerComponent implements ng.IComponentOptions {
    template = `
        <ul>
            <li ng-repeat="item in $demoConsumerCtrl.data">{{ item.title }}</li>
        </ul>
    `;
    controller = DemoConsumerComponentController;
    controllerAs = '$demoConsumerCtrl';
}
class DemoConsumerComponentController implements ng.IComponentController {
    static $inject = ['demoSrvOld'];
    data: any;
    constructor(public demoSrvOld: DemoSrvService) { }
    $onInit() {
        this.demoSrvOld.getData().then((response) => {
            const data = <any[]>response.data;
            this.data = data.slice(0, 10);
        }, (err) => {
            console.log(err);
        });
    }
}