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

  clickCounter() {
    this.clickCount += 1;
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter');
  }

}
