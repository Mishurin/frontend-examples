import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-demo-cmp',
  templateUrl: './demo-cmp.component.html',
  styleUrls: ['./demo-cmp.component.css']
})
export class DemoCmpComponent implements OnInit {
  title = 'World';
  @Input() greeting;
  constructor(http: Http) { }
  ngOnInit() { }
  ngOnDestroy() {}
}
