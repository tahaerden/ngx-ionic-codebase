import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { BehaviorSubject } from 'rxjs';
import { AuthenticationService } from '@services/authentication.service';
import { User } from '@models/user';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  themeToggle: boolean;
  private themeToggle$ = new BehaviorSubject(false);
  castThemeToggle$ = this.themeToggle$.asObservable();
  appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Employee List',
      url: '/employee-list',
      icon: 'list'
    },
    {
      title: 'UI Components',
      url: '/ui-components',
      icon: 'book'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authenticationService: AuthenticationService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.checkToggle(prefersDark.matches);
    // Listen for changes to the prefers-color-scheme media query
    prefersDark.addEventListener('change', e => {
      this.checkToggle(e.matches);
    });
  }
  checkToggle(shouldCheck: boolean) {
    document.body.classList.toggle('dark', shouldCheck);
    this.themeToggle = shouldCheck;
    this.themeToggle$.next(this.themeToggle);
  }
}
