import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    CoreModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [StatusBar, SplashScreen],
  bootstrap: [AppComponent]
})
export class AppModule {}
