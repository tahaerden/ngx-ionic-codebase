import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './components/header/header.component';
import { ErrorMessagesComponent } from './components/error-messages/error-messages.component';
import { InstagramTabBarComponent } from './components/instagram-tab-bar/instagram-tab-bar.component';
import { CreateEmployeeComponent } from './components/modals/create-employee/create-employee.component';
// import { AuthenticationService } from './services/authentication.service';
// import { EmployeeService } from './services/employee.service';
// import { InstagramService } from './services/instagram.service';

const modules = [CommonModule, FormsModule, IonicModule];
const components = [
  HeaderComponent,
  ErrorMessagesComponent,
  InstagramTabBarComponent
];
const modals = [CreateEmployeeComponent];
// const services = [AuthenticationService, EmployeeService, InstagramService];

@NgModule({
  imports: [...modules],
  declarations: [...components, ...modals],
  // entryComponents: [...modals],
  exports: [...modules, ...components]
  // providers: [...services]
})
export class SharedModule {}
