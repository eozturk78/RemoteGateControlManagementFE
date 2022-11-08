import { Router } from '@angular/router';
import { LocalstorageService } from './../../services/local-storage-service/storage-service.service';
import { LoginResponse } from './../../model/login/login-model';
import { ManagementService } from '../../services/user/management.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  submitted = false;
  get f() {
    return this.form.controls;
  }

  constructor(
    private managementService: ManagementService,
    private localStorageService: LocalstorageService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.submitted = true;
    if (!this.form.invalid) {
      this.managementService
        .login(this.form.value)
        .subscribe((resp: LoginResponse) => {
          if (resp != null) {
            this.localStorageService.setItem('token', resp.token);
            this.localStorageService.setItem('email', resp.email);
            window.location.href = '/main/sites';
          }
        });
    }
  }
}
