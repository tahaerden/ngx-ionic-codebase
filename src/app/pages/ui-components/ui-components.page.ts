import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-ui-components',
  templateUrl: './ui-components.page.html',
  styleUrls: ['./ui-components.page.scss']
})
export class UiComponentsPage implements OnInit {

  constructor(private actionCtrl: ActionSheetController) {}

  ngOnInit() {}
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
}
