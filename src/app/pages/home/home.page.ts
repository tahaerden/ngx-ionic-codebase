import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  clickCount = 0;
  myModel = 'teha';

  constructor() {
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter');
  }

  clickCounter() {
    this.clickCount += 1;
  }

}
