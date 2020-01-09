import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ErrorMessagesComponent } from './error-messages/error-messages.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [HeaderComponent, ErrorMessagesComponent],
  exports: [HeaderComponent, ErrorMessagesComponent]
})
export class ComponentsModule {}
