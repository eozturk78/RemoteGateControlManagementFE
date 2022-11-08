import { ManagementService } from 'src/app/services/user/management.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  token!: string;
  submitted = false;
  resetPasswordSuccess=false;
  form = new FormGroup({
    token: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    repeatPassword: new FormControl('', Validators.required),
  });

  get f() {
    return this.form.controls;
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private managementService: ManagementService
  ) {
    this.token = this.activatedRoute.snapshot.params['token'];
    this.f['token'].setValue(this.token);
  }

  ngOnInit(): void {}

  onSubmit() {
    this.submitted = true;
    if (!this.form.invalid && this.f['password'].value == this.f['repeatPassword'].value)
      this.managementService
        .resetPassword(this.form.value)
        .subscribe((data: any) => {this.resetPasswordSuccess = true},err=>{});
  }
}
