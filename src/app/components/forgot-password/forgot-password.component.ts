import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ManagementService } from 'src/app/services/user/management.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  isSuccessForgotPassword = false;
  submitted = false;
  form = new FormGroup(
    {
        email: new FormControl('', Validators.required)
    }
  )

  get f(){
    return this.form.controls;
  }

  constructor(
    private managementService: ManagementService) { }

  ngOnInit(): void {
  }
  onSubmit(){

    this.submitted = true;
    if (!this.form.invalid) {
      this.managementService
        .forgotPassword(this.form.value)
        .subscribe((resp: any) => {
          if (resp != null) {
            this.isSuccessForgotPassword =true
          }
        },err=>{});
    }
  }
}
