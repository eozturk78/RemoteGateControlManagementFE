import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ManagementService } from 'src/app/services/user/management.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  submitted = false;
  isSuccessChangePassword=false;
  form = new FormGroup({
    oldPassword: new FormControl('', Validators.required),
    newPassword: new FormControl('', Validators.required),
  });

  get f() {
    return this.form.controls;
  }

  constructor(
    private managementService: ManagementService
  ) {
  }

  ngOnInit(): void {}

  onSubmit() {
    this.submitted = true;
    if (!this.form.invalid)
      this.managementService
        .changePassword(this.form.value)
        .subscribe((data: any) => {this.isSuccessChangePassword = true},err=>{});
  }

}
