export class DemoDirParentComponent implements ng.IComponentOptions {
    template = `
        Inside parent: 
        <demo-dir-old 
            every-second="$demoDirParentCtrl.everySecond"
            five-5-secs="$demoDirParentCtrl.everyFiveSeconds"
        ></demo-dir-old>
    `;
    controller = DemoDirParentContoller;
    controllerAs = '$demoDirParentCtrl';
}
class DemoDirParentContoller implements ng.IComponentController {
    static $inject = [];
    constructor() { }
    everySecond(a) { console.log(a); }
    everyFiveSeconds(b) { console.log(b); }
}