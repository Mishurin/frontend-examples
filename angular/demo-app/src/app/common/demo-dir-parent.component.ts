import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-dir-parent',
  templateUrl: './demo-dir-parent.component.html',
  styleUrls: ['./demo-dir-parent.component.css']
})
export class DemoDirParentComponent implements OnInit {
  constructor() { }
  ngOnInit() {}
  everySecond(e) { console.log(e); }
  everyFiveSeconds(e) { console.log(e); }
}
