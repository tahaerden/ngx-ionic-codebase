export class Employee {
  public id: string;
  public name: string;
  public salary: string;
  public icon?: string;

  constructor(data: any) {
    this.id = data.id;
    this.name = data.employee_name;
    this.salary = data.employee_salary;
    this.icon = data.icon;
  }
}
