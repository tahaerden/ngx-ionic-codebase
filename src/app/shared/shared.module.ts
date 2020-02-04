import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './components/header/header.component';
import { ErrorMessagesComponent } from './components/error-messages/error-messages.component';
import { InstagramTabBarComponent } from './components/instagram-tab-bar/instagram-tab-bar.component';
import { CreateEmployeeComponent } from './components/modals/create-employee/create-employee.component';

const modules = [CommonModule, FormsModule, IonicModule];
const components = [
  HeaderComponent,
  ErrorMessagesComponent,
  InstagramTabBarComponent
];
const modals = [CreateEmployeeComponent];

@NgModule({
  imports: [...modules],
  declarations: [...components, ...modals],
  entryComponents: [...modals],
  exports: [...modules, ...components]
})
export class SharedModule {}
