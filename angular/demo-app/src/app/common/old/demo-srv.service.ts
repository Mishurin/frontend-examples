export class DemoSrvService {
    static $inject = ['$http'];
    url = 'http://jsonplaceholder.typicode.com/posts';
    constructor(public $http: ng.IHttpService) {}
    getData() {
        return this.$http.get(this.url);
    }
}