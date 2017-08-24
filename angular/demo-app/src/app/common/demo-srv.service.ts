import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class DemoSrvService {
  url = 'http://jsonplaceholder.typicode.com/posts';
  constructor(public http: Http) { }

  getData(): Observable<any> {
    return this.http.get(this.url).map((response) => {
      return response.json().slice(0, 10);
    }).catch(this.handleError);
  }

  handleError(error) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }

}
