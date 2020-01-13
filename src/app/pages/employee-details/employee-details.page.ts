import { Component } from '@angular/core';
import { ApiService } from '@services/api.service';
import { Observable, Subject } from 'rxjs';
import { Employee, IEmployee } from '@models/employee';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.page.html',
  styleUrls: ['./employee-details.page.scss']
})
export class EmployeeDetailsPage {
  unsub = new Subject();
  employee$: Observable<Employee>;
  id = Number(this.route.snapshot.paramMap.get('id'));

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private toast: ToastController,
    private router: Router
  ) {}

  ionViewWillEnter() {
    this.employee$ = this.api.getEmployee(this.id);
  }

  ionViewWillLeave() {
    this.unsub.next();
    this.unsub.complete();
  }

  updateEmployee(f: NgForm) {
    this.api
      .updateEmployee(this.id, f.value)
      .pipe(takeUntil(this.unsub))
      .subscribe((data: any) => {
        if (data.status === 'success') {
          this.toast
            .create({
              color: 'success',
              header: 'Success',
              message: 'Employee is edited successfully.',
              duration: 5 * 1000
            })
            .then(toast => {
              toast.present();
              this.router.navigate(['employee-list']);
            });
        }
      });
  }

  deleteEmployee() {
    this.api
      .deleteEmployee(this.id)
      .pipe(takeUntil(this.unsub))
      .subscribe((data: any) => {
        if (data.status === 'success') {
          this.toast
            .create({
              color: 'success',
              header: 'Success',
              message: data.message,
              duration: 5 * 1000
            })
            .then(toast => {
              toast.present();
              this.router.navigate(['employee-list']);
            });
        }
      });
  }
}
