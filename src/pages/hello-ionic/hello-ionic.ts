import { Component } from '@angular/core';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  private date;
  private curHr;
  public daySegment;
  constructor() {
    this.date = new Date();
    this.curHr = this.date.getHours();

    if (this.curHr < 12) {
    this.daySegment = 'Good Morning!'
  } else if (this.curHr<18) {
    this.daySegment = 'Good Afternoon!'
  } else {
    this.daySegment = 'Good Evening!'
  }
  }
  
}
