import { DeviceListComponent } from './device-list.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [DeviceListComponent],
  imports: [
    RouterModule.forChild(
      [
        {path: '', pathMatch: 'full', component: DeviceListComponent},
      ]
    ),
    CommonModule,
    NgbModule,
    SharedModule
  ]
})
export class DeviceListModule { }
