import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from '@services/authentication.service';
import { Router } from '@angular/router';
import { User } from '@models/user';
import { ActionSheetController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUser$: Observable<User>;
  @Input() title: string;
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private actionCtrl: ActionSheetController
  ) {
    this.currentUser$ = this.authenticationService.currentUser;
  }

  ngOnInit() {}

  openUserMenu() {
    this.actionCtrl
      .create({
        header: 'What would you like to do?',
        buttons: [
          {
            text: 'Logout',
            role: 'destructive',
            icon: 'log-out',
            handler: () => {
              console.log('Logout clicked');
              this.logout();
            }
          },
          {
            text: 'Edit Profile',
            icon: 'create',
            handler: () => {
              console.log('Profile clicked');
            }
          },
          {
            text: 'Settings',
            icon: 'settings',
            handler: () => {
              console.log('Settings clicked');
            }
          },
          {
            text: 'Cancel',
            icon: 'close',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]
      })
      .then(ac => ac.present());
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
