import { Directive, EventEmitter } from '@angular/core';

@Directive({
  selector: 'app-demo-dir',
  outputs: ['everySecond', 'five5Secs: everyFiveSeconds']
})
export class DemoDirDirective {

  everySecond = new EventEmitter();
  five5Secs = new EventEmitter();
 
  constructor() {
    setInterval(() => this.everySecond.emit("second:event"), 1000);
    setInterval(() => this.five5Secs.emit("fivesecond:event"), 5000);
  }
}
