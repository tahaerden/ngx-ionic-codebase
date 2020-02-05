import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class HandleErrorService {
  constructor(private toast: ToastController) {}

  // Error handling
  showError = (error: any) => {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    this.toast
      .create({
        color: 'danger',
        header: 'Error',
        message: errorMessage,
        duration: 5 * 1000,
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
    return throwError(errorMessage);
  };
}
