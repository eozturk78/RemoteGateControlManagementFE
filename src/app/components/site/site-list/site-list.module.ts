
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { SiteListComponent } from './site-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [SiteListComponent],
  imports: [
    RouterModule.forChild(
      [
        {path: '', pathMatch: 'full', component: SiteListComponent},
      ]
    ),
    CommonModule,
    NgbModule,
    SharedModule
  ]
})
export class SiteListModule { }
