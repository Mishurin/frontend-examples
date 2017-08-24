import { Component, OnInit } from '@angular/core';
import { DemoSrvService } from './demo-srv.service';

@Component({
  selector: 'app-demo-consumer',
  template: `
    <ul>
      <li *ngFor="let item of data">{{ item.title }}</li>
    </ul>
  `,
  styles: []
})
export class DemoConsumerComponent implements OnInit {

  data: any;

  constructor(public demoSrv: DemoSrvService) { }

  ngOnInit() {
    this.demoSrv.getData().subscribe((data) => {
      this.data = data;
    }, (err) => {
      console.log(err);
    });
  }

}
