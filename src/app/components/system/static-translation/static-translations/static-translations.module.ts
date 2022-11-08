import { StaticTranslationsComponent } from './static-translations.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/components/shared/shared.module';



@NgModule({
  declarations: [StaticTranslationsComponent],
  imports: [
    RouterModule.forChild(
        [{
          path:'', pathMatch:'full', component: StaticTranslationsComponent
        }]
    ),
    CommonModule,
    NgbModule,
    SharedModule
  ]
})
export class StaticTranslationModule { }
