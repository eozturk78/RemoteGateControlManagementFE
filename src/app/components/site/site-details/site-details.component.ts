import { MdlDeviceListComponent } from './../../shared/mdl-device-list/mdl-device-list.component';
import { SiteDevice, SiteDeviceResponse } from './../../../model/site/site-device-model';
import { SiteManagerDetailsComponent } from './../site-manager-details/site-manager-details.component';
import { SiteManagerResponse } from './../../../model/site/site-manager-model';
import { City, CityResponse } from './../../../model/location/city-model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from 'src/app/model/location/country-model';
import { SiteResponse } from 'src/app/model/site/site-model';
import { BaseService } from 'src/app/services/base/base.service';
import { ManagementService } from 'src/app/services/user/management.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { SiteUserDetailsComponent } from '../site-user-details/site-user-details.component';
import { SiteUserResponse } from 'src/app/model/site/site-user-model';

@Component({
  selector: 'app-site-details',
  templateUrl: './site-details.component.html',
  styleUrls: ['./site-details.component.scss'],
})
export class SiteDetailsComponent implements OnInit {
  form = new FormGroup({
    siteId: new FormControl(null),
    buildingName: new FormControl(null, [Validators.required]),
    countryId: new FormControl(null, [Validators.required]),
    cityId: new FormControl(null, [Validators.required]),
    address: new FormControl(null, [Validators.required]),
  });
  siteId: any = null;
  submitted: boolean = false;
  countryList!: Array<Country>;
  cityList!: Array<City>;
  siteManagerResp!: SiteManagerResponse;
  siteUserResp!: SiteUserResponse;
  siteDeviceResp!: SiteDeviceResponse;
  get f() {
    return this.form?.controls;
  }

  active = 0;
  constructor(
    private systemService: ManagementService,
    private activatedRoute: ActivatedRoute,
    private modalService: BsModalService,
    private router: Router,
    private base:BaseService
  ) {
    if (this.activatedRoute.snapshot.params['siteId'] != undefined)
      this.siteId = this.activatedRoute.snapshot.params['siteId'];
  }

  ngOnInit(): void {
    this.systemService
      .getSiteDetail(this.siteId)
      .subscribe((data: SiteResponse) => {
        this.countryList = data.countries;
        this.cityList = data.cities;
        if (data.records != null) {
          this.form.setValue(data.records[0]);
          this.onGetSiteManagerList();
          this.onGetSiteDeviceList();
          this.onGetSiteUserList();
        }
      });
  }

  onSubmit() {
    this.submitted = true;
    if (!this.form.invalid) {
      this.systemService.postSite(this.form.value).subscribe(
        (data: SiteResponse) => {
          if (data.records != null) {
            this.form.setValue(data.records[0]);
          }
          this.base.successMessage.push("successfully_saved")
        },
        (err) => {}
      );
    }
  }
  onChangeCountry() {
    this.systemService
      .getCityList(this.form.controls['countryId'].value)
      .subscribe((data: CityResponse) => {
        this.cityList = data.records;
      });
  }

  onDelete() {
    this.systemService.deleteSite(this.siteId).subscribe((data: any) => {
      this.router.navigate(['/main/sites']);
    });
  }

  onGetSiteManagerList() {
    this.systemService
      .getSiteManagerList(this.siteId)
      .subscribe((data: SiteManagerResponse) => {
        this.siteManagerResp = data;
      });
  }

  onDeleteSiteDevice(siteManagerId: string, index: number) {
    this.systemService
      .deleteSiteManager(siteManagerId)
      .subscribe((data: SiteManagerResponse) => {
        this.siteManagerResp.records.splice(index, 1);
      });
  }

  onGetSiteUserList() {
    this.systemService
      .getSiteUserList(this.siteId)
      .subscribe((data: SiteUserResponse) => {
        this.siteUserResp = data;
      });
  }

  onDeleteSiteUser(siteUserId: string, index: number) {
    this.systemService
      .deleteSiteUser(siteUserId)
      .subscribe((data: SiteUserResponse) => {
        this.siteUserResp.records.splice(index, 1);
      });
  }

  onGetSiteDeviceList() {
    this.systemService
      .getSiteDeviceList(this.siteId)
      .subscribe((data: SiteDeviceResponse) => {
        this.siteDeviceResp = data;
      });
  }

  onOpenSiteManagerDetail(siteManagerId?: string) {
    const modalRef = this.modalService.show(SiteManagerDetailsComponent, {
      ariaLabelledBy: 'modal-basic-title',
      class: 'mdl-for-small-size',
      backdrop: 'static',
      keyboard: true,
      initialState: {
        siteId: this.siteId,
        siteManagerId: siteManagerId,
        onSubmitCompleted: (data: any) => {
          this.onGetSiteManagerList();
          this.base.successMessage.push("successfully_saved")
          modalRef.hide();
        },
      },
    });
  }

  onOpenSiteUserDetail(siteUserId?: string) {
    const modalRef = this.modalService.show(SiteUserDetailsComponent, {
      ariaLabelledBy: 'modal-basic-title',
      class: 'mdl-for-small-size',
      backdrop: 'static',
      keyboard: true,
      initialState: {
        siteId: this.siteId,
        siteUserId: siteUserId,
        onSubmitCompleted: (data: any) => {
          this.onGetSiteUserList();
          this.base.successMessage.push("successfully_saved")
          modalRef.hide();
        },
      },
    });
  }

  onOpenDeviceDetail(siteDevice?: SiteDevice) {
    const modalRef = this.modalService.show(MdlDeviceListComponent, {
      ariaLabelledBy: 'modal-basic-title',
      class: 'mdl-for-small-size',
      backdrop: 'static',
      keyboard: true,
      initialState: {
        siteDevice: siteDevice,
        latitude: siteDevice?.latitude,
        longitude: siteDevice?.longitude,
        siteId: this.siteId,
        address: this.f['address'].value,
        onSetComplete: () => {
          this.onGetSiteDeviceList();
          this.base.successMessage.push("successfully_saved")
          modalRef.hide();
        },
      },
    });
  }

  onDeleteDevice(deviceId: string, index: number) {
    this.systemService.deleteSiteDevice(deviceId).subscribe((data: any) => {
      this.siteDeviceResp.records.splice(index, 1);
    });
  }

  onOpenSiteDeviceDetail(deviceId: string) {
    window.open('/main/device-detail/' + deviceId, 'target_blank');
  }
}
