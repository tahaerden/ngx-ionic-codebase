import { Component, OnInit } from '@angular/core';
import { ApiService } from '@services/api.service';
import { Observable } from 'rxjs';
import { Employee } from '@models/employee';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.page.html',
  styleUrls: ['./employee-details.page.scss']
})
export class EmployeeDetailsPage implements OnInit {
  test$: Observable<Employee>;
  constructor(private api: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(typeof id);
    console.log(id);

    this.test$ = this.api.getEmployee(id);
  }
}
