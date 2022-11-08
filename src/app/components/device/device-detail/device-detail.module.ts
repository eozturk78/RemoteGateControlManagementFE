
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { DeviceDetailComponent } from './device-detail.component';

import {TextMaskModule} from "angular2-text-mask"

@NgModule({
  declarations: [DeviceDetailComponent],
  imports: [
    RouterModule.forChild(
      [
        {path: '', pathMatch: 'full', component: DeviceDetailComponent},
      ]
    ),
    CommonModule,
    SharedModule,
    TextMaskModule
  ]
})
export class DeviceDetailModule { }
