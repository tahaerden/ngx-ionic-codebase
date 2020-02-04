import { NgModule, Optional, SkipSelf } from '@angular/core';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { RouteReuseStrategy } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { IonicRouteStrategy } from '@ionic/angular';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { fakeBackendProvider } from './interceptors/fake-backend';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [BrowserModule, HttpClientModule],
  providers: [
    fakeBackendProvider,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}
