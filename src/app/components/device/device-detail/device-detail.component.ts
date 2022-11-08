import { DeviceResponse } from 'src/app/model/device/device-model';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseService } from 'src/app/services/base/base.service';
import { ManagementService } from 'src/app/services/user/management.service';

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.scss']
})
export class DeviceDetailComponent implements OnInit {
  latitude = 51.678418;
  longitude = 7.809007;
  form = new FormGroup({
    deviceId: new FormControl(null),
    serialNumber: new FormControl(null, [Validators.required]),
    ipAddress: new FormControl("", [Validators.required]),
    ssId: new FormControl(""),
    password: new FormControl(""),
    urls: this.fb.array([])
  });
  deviceId: string;
  submitted: boolean = false;
  get f() {
    return this.form?.controls;
  }
  get getUrls(){
    return this.form.get('urls') as FormArray;
  }

  _urlList = this.form.get('urls') as FormArray;
  constructor(private systemService: ManagementService,
              private activatedRoute: ActivatedRoute,
              private base: BaseService,
              private router: Router,
              private fb: FormBuilder) {
    this.deviceId = this.activatedRoute.snapshot.params['deviceId'];
  }

  ngOnInit(): void {
    this.systemService.getDeviceDetail(this.deviceId)
      .subscribe((data: DeviceResponse) => {
       // data.records[0].urls = JSON.parse(data.records[0].urls);
        data.records[0].urls?.forEach(url=>{
          this._urlList.push(this.createItem(url))
        })
        if (data.records != null) this.form.setValue(data.records[0]);
      });
  }

  onSubmit() {
    this.submitted = true;
    //if (!this.form.invalid) {
      this.systemService.postDevice(this.form.value)
        .subscribe((data: DeviceResponse) => {
          this.router.navigate(['/main/devices']);
        },err=>{

        })
    //}
  }


  onDelete() {
    this.systemService.deleteDevice(this.deviceId)
      .subscribe((data: any) => {
        this.router.navigate(['/main/devices']);
      });
  }

  createItem(item: any = null): FormGroup {
    return this.fb.group({
      name: new FormControl(item?.name, [Validators.required]),
      url: new FormControl(item?.url, [Validators.required])
    });
  }

  addNewUrl(){
    this._urlList.push(this.createItem());
  }
}
