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

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private toast: ToastController,
    private router: Router
  ) {}

  ionViewWillEnter() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.employee$ = this.api.getEmployee(id);
  }

  ionViewWillLeave() {
    this.unsub.next();
    this.unsub.complete();
  }

  deleteEmployee(id: number) {
    this.api
      .deleteEmployee(id)
      .pipe(takeUntil(this.unsub))
      .subscribe((data: any) => {
        if (data.success) {
          this.toast
            .create({
              color: 'success',
              header: 'Success',
              message: data.success.text,
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
