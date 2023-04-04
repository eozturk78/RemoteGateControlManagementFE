import { SiteUserDescriptionComponent } from './components/site/site-user-description/site-user-description.component';
import { SiteUserDetailsComponent } from './components/site/site-user-details/site-user-details.component';
import { MdlDeviceListComponent } from './components/shared/mdl-device-list/mdl-device-list.component';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { MdlDeleteConfirmComponent } from './components/shared/mdl-delete-confirm/mdl-delete-confirm.component';
import { MenuComponent } from './components/shared/menu/menu.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpServiceService } from './services/http/http-service.service';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { HttpErrorHandler } from './services/http/http-error-handler.service';
import { AuthInterceptor } from './services/http/auth-interceptor';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MainComponent } from './components/main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SiteManagerDetailsComponent } from './components/site/site-manager-details/site-manager-details.component';
import { AgmCoreModule } from '@agm/core';
import { ErrorMessageComponent } from './components/shared/error-message/error-message.component';
import { SuccessMessageComponent } from './components/shared/success-message/success-message.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainComponent,
    MainLayoutComponent,
    LoginLayoutComponent,
    SiteManagerDetailsComponent,
    SiteUserDetailsComponent,
    SiteUserDescriptionComponent,
    MdlDeviceListComponent,
    ErrorMessageComponent,
    SuccessMessageComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    ModalModule.forRoot(),
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbTooltipModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDH9AkxAzDRdobsVdTx-TdLKiOjpAJylHI',
      libraries: ['places'],
    }),
    NgbModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [
    HttpServiceService,
    HttpErrorHandler,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  exports: [AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    'https://api.aesmartsystems.com/resources/',
    '.json'
  );
}
