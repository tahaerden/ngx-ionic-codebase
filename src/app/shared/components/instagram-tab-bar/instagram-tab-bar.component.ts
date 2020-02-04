import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instagram-tab-bar',
  templateUrl: './instagram-tab-bar.component.html',
  styleUrls: ['./instagram-tab-bar.component.scss']
})
export class InstagramTabBarComponent implements OnInit {
  currentUrl: string;
  tabList = [
    {
      url: '/instagram/posts',
      icon: 'home'
    },
    {
      url: '/instagram/search',
      icon: 'search'
    },
    {
      url: '/instagram/add',
      icon: 'add'
    },
    {
      url: '/instagram/likes',
      icon: 'heart'
    },
    {
      url: '/instagram/profile',
      icon: 'person'
    }
  ];
  constructor(private router: Router) {}

  ngOnInit() {
    this.currentUrl = this.router.url;
  }
  goToRoute(route: string) {
    this.router.navigate([route]);
  }
}
