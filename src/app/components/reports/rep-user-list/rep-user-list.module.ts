import { SharedModule } from 'src/app/components/shared/shared.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RepUserListComponent } from './rep-user-list.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [RepUserListComponent],
  imports: [
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: RepUserListComponent },
    ]),
    CommonModule,
    SharedModule
  ],
})
export class RepUserListModule {}
