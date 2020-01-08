import { Component } from '@angular/core';
import { ActionSheetController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-ui-components',
  templateUrl: './ui-components.page.html',
  styleUrls: ['./ui-components.page.scss']
})
export class UiComponentsPage {
  constructor(
    private actionCtrl: ActionSheetController,
    private toast: ToastController
  ) {}

  ionViewWillEnter() {}
  openActionSheet() {
    this.actionCtrl
      .create({
        header: 'Header',
        subHeader: 'Subheader',
        buttons: [
          {
            text: 'Delete',
            role: 'destructive',
            icon: 'trash',
            handler: () => {
              console.log('Delete clicked');
            }
          },
          {
            text: 'Share',
            icon: 'share',
            handler: () => {
              console.log('Share clicked');
            }
          },
          {
            text: 'Play (open modal)',
            icon: 'arrow-dropright-circle',
            handler: () => {
              console.log('Play clicked');
            }
          },
          {
            text: 'Favorite',
            icon: 'heart',
            handler: () => {
              console.log('Favorite clicked');
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
  showToast() {
    this.toast
      .create({
        header: 'Test!',
        color: 'danger',
        message: 'This is a dangerous test toast.',
        buttons: [
          {
            icon: 'close-circle',
            text: null,
            role: 'cancel'
          }
        ]
      })
      .then(toast => {
        toast.present();
      });
  }
}
