import { MainComponent } from './components/main/main.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('./components/login/login.module').then((m) => m.LoginModule),
      },
      {
        path: 'forgot-password',
        loadChildren: () =>
          import('./components/forgot-password/forgot-password.module').then(
            (m) => m.ForgotPasswordModule
          ),
      },
      {
        path: 'reset-password',
        loadChildren: () =>
          import('./components/reset-password/reset-password.module').then(
            (m) => m.ResetPasswordModule
          ),
      },
      {
        path: 'reset-password/:token',
        loadChildren: () =>
          import('./components/reset-password/reset-password.module').then(
            (m) => m.ResetPasswordModule
          ),
      },
    ],
  },
  {
    path: 'main',
    component: MainLayoutComponent,
    children: [
      {
        path: 'well-come',
        component: MainComponent,
      },
      {
        path: 'sites',
        loadChildren: () =>
          import('./components/site/site-list/site-list.module').then(
            (m) => m.SiteListModule
          ),
      },
      {
        path: 'site-detail',
        loadChildren: () =>
          import('./components/site/site-details/site-details.module').then(
            (m) => m.SiteDetailsModule
          ),
      },
      {
        path: 'site-detail/:siteId',
        loadChildren: () =>
          import('./components/site/site-details/site-details.module').then(
            (m) => m.SiteDetailsModule
          ),
      },
      {
        path: 'devices',
        loadChildren: () =>
          import('./components/device/device-list/device-list.module').then(
            (m) => m.DeviceListModule
          ),
      },
      {
        path: 'device-detail',
        loadChildren: () =>
          import('./components/device/device-detail/device-detail.module').then(
            (m) => m.DeviceDetailModule
          ),
      },
      {
        path: 'device-detail/:deviceId',
        loadChildren: () =>
          import('./components/device/device-detail/device-detail.module').then(
            (m) => m.DeviceDetailModule
          ),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./components/settings/user/user-list/user-list.module').then(
            (m) => m.UserListModule
          ),
      },
      {
        path: 'user-detail',
        loadChildren: () =>
          import(
            './components/settings/user/user-detail/user-detail.module'
          ).then((m) => m.UserDetailsModule),
      },
      {
        path: 'user-detail/:userId',
        loadChildren: () =>
          import(
            './components/settings/user/user-detail/user-detail.module'
          ).then((m) => m.UserDetailsModule),
      },
      {
        path: 'message-accounts',
        loadChildren: () =>
          import(
            './components/system/message-accounts/message-accounts.module'
          ).then((m) => m.MessageAccountsModule),
      },
      {
        path: 'message-account-detail',
        loadChildren: () =>
          import(
            './components/system/message-account-detail/message-account-detail.module'
          ).then((m) => m.MessageAccountDetailModule),
      },
      {
        path: 'message-account-detail/:messageAccountId',
        loadChildren: () =>
          import(
            './components/system/message-account-detail/message-account-detail.module'
          ).then((m) => m.MessageAccountDetailModule),
      },
      {
        path: 'message-accounts',
        loadChildren: () =>
          import(
            './components/system/message-accounts/message-accounts.module'
          ).then((m) => m.MessageAccountsModule),
      },
      {
        path: 'message-account-detail',
        loadChildren: () =>
          import(
            './components/system/message-account-detail/message-account-detail.module'
          ).then((m) => m.MessageAccountDetailModule),
      },
      {
        path: 'message-account-detail/:messageAccountId',
        loadChildren: () =>
          import(
            './components/system/message-account-detail/message-account-detail.module'
          ).then((m) => m.MessageAccountDetailModule),
      },
      {
        path: 'message-templates',
        loadChildren: () =>
          import(
            './components/system/message-templates/message-templates.module'
          ).then((m) => m.MessageTemplatesModule),
      },
      {
        path: 'message-template-detail',
        loadChildren: () =>
          import(
            './components/system/message-template-detail/message-template-detail.module'
          ).then((m) => m.MessageTemplateDetailModule),
      },
      {
        path: 'message-template-detail/:messageTemplateId',
        loadChildren: () =>
          import(
            './components/system/message-template-detail/message-template-detail.module'
          ).then((m) => m.MessageTemplateDetailModule),
      },
      {
        path: 'static-translations',
        loadChildren: () =>
          import(
            './components/system/static-translation/static-translations/static-translations.module'
          ).then((m) => m.StaticTranslationModule),
      },
      {
        path: 'system-parameters',
        loadChildren: () =>
          import(
            './components/system/system-parameters/system-parameters.module'
          ).then((m) => m.SystemParametersModule),
      },
      {
        path: 'change-password',
        loadChildren: () =>
          import('./components/change-password/change-password.module').then(
            (m) => m.ChangePasswordModule
          ),
      },
      {
        path: 'rep-user-list',
        loadChildren: () =>
          import('./components/reports/rep-user-list/rep-user-list.module').then(
            (m) => m.RepUserListModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
