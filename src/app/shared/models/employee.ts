export interface IEmployee {
  id: string;
  name: string;
  salary: string;
  age: string;
  avatar: string;
}

export class Employee implements IEmployee {
  public id: string;
  public name: string;
  public salary: string;
  public age: string;
  public avatar: string;

  constructor(data: any) {
    this.id = data.id;
    this.name = data.employee_name;
    this.salary = data.employee_salary;
    this.age = data.employee_age;
    this.avatar = data.profile_image;
  }
}
