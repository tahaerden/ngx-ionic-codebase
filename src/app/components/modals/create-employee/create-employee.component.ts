import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { NgForm } from '@angular/forms';
import { ToastController, ModalController } from '@ionic/angular';
import { ApiService } from '@services/api.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
  unsub = new Subject();
  constructor(
    private toast: ToastController,
    private api: ApiService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {}

  ionViewWillLeave() {
    this.unsub.next();
    this.unsub.complete();
  }

  createEmployee(f: NgForm) {
    console.log(f);

    // this.api
    //   .createEmployee(f.value)
    //   .pipe(takeUntil(this.unsub))
    //   .subscribe((data: any) => {
    //     if (data) {
    //       this.toast
    //         .create({
    //           color: 'success',
    //           header: 'Success',
    //           message: 'Employee is added successfully.',
    //           duration: 5 * 1000
    //         })
    //         .then(toast => {
    //           toast.present();
    //           this.modalCtrl.dismiss(true);
    //         });
    //     }
    //   });
  }
}
