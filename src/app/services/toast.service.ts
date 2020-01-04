import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ToastOptions } from '@models/toastOptions';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(public toastController: ToastController) { }

  async presentToast(options?: ToastOptions) {
    const toast = await this.toastController.create({
      header: options.header,
      message: options.message,
      color: options.color,
      position: options.position,
      duration: options.duration,
      buttons: [
        {
          icon: 'close-circle',
          text: null,
          role: 'cancel'
        }
      ]
    });
    toast.present();
  }

}
