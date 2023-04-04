import { SiteUserDescriptionComponent } from './../site/site-user-description/site-user-description.component';
import { Component, OnInit } from '@angular/core';
import { City, CityResponse } from 'src/app/model/location/city-model';
import { Country } from 'src/app/model/location/country-model';
import {
  ReportUserListResponse,
  RepUserListModel,
} from 'src/app/model/report/rep-user-list';
import {
  SiteUserListModel,
  SiteUserListResponse,
} from 'src/app/model/site-user/site-user-list';
import { ManagementService } from 'src/app/services/user/management.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BaseService } from 'src/app/services/base/base.service';

@Component({
  selector: 'app-site-user-list',
  templateUrl: './site-user-list.component.html',
  styleUrls: ['./site-user-list.component.scss'],
})
export class AllSiteUserListComponent implements OnInit {
  siteId!: string;
  searchText!: string;
  countryId!: string;
  cityId?: string = '';
  siteResp!: SiteUserListResponse;
  countryList!: Array<Country>;
  cityList!: Array<City>;
  userResp: SiteUserListResponse | undefined;
  userList!: Array<RepUserListModel>;
  areYouSureCancelMemberShip = 'are_you_sure_cancel_membership';
  cancelMembershipText = 'cancel_membership';
  areYouSureActivateMemberShip = 'are_you_sure_activate_membership';
  activateMembershipText = 'activate_membership';
  constructor(
    private managementService: ManagementService,
    private modalService: BsModalService,
    private base: BaseService
  ) {}

  ngOnInit(): void {
    this.onSearch();
  }
  onSearch() {
    this.managementService
      .getAllSiteUserList(
        this.siteId,
        this.countryId,
        this.cityId,
        this.searchText
      )
      .subscribe((data: ReportUserListResponse) => {
        if (this.countryList == null) {
          this.countryList = data.countries;
          this.countryId = this.countryList[0].countryId;
          this.onChangeCountry();
        }
        this.userList = data.records;
        this.userList.forEach((x) => {
          x.description = x.description == null ? "" : x.description;
        });
      });
  }

  onChangeCountry() {
    this.onSearch();
    this.managementService
      .getCityList(this.countryId)
      .subscribe((data: CityResponse) => {
        this.cityList = data.records;
      });
  }
  onOpenDescriptionModal(user: RepUserListModel) {
    const modalRef = this.modalService.show(SiteUserDescriptionComponent, {
      ariaLabelledBy: 'modal-basic-title',
      class: 'mdl-for-small-size',
      backdrop: 'static',
      keyboard: true,
      initialState: {
        user: user,
        onSubmitCompleted: (data: any) => {
          this.onSearch();
          this.base.successMessage.push('successfully_saved');
          modalRef.hide();
        },
      },
    });
  }

  confirmUser(user: SiteUserListModel, confirmUser: number) {
    this.managementService
      .confirmUser(user.userId, confirmUser)
      .subscribe((data: any) => {
        user.isConfirmed = user.isConfirmed == true ? false : true;
      });
  }
  sort: number = 1;
  onSortTitle() {
    if (this.sort == 1)
      this.userList.sort((a, b) =>
        a.userTitle.localeCompare(b.userTitle, undefined, {
          sensitivity: 'base',
        })
      );
    else {
      this.userList.sort((a, b) =>
        b.userTitle.localeCompare(a.userTitle, undefined, {
          sensitivity: 'base',
        })
      );
    }
    this.sort = this.sort * -1;
  }
  onSortEmail() {
    if (this.sort == 1)
      this.userList.sort((a, b) =>
        a.email.localeCompare(b.email, undefined, {
          sensitivity: 'base',
        })
      );
    else {
      this.userList.sort((a, b) =>
        b.email.localeCompare(a.email, undefined, {
          sensitivity: 'base',
        })
      );
    }
    this.sort = this.sort * -1;
  }

  onSortPhoneNumber() {
    if (this.sort == 1)
      this.userList.sort((a, b) =>
        a.phoneNumber.localeCompare(b.phoneNumber, undefined, {
          sensitivity: 'base',
        })
      );
    else {
      this.userList.sort((a, b) =>
        b.phoneNumber.localeCompare(a.phoneNumber, undefined, {
          sensitivity: 'base',
        })
      );
    }
    this.sort = this.sort * -1;
  }

  onSortIsConfirmed() {
    this.userList.sort((a, b) =>
      b.isConfirmed > a.isConfirmed ? -1 * this.sort : 1 * this.sort
    );
    this.sort = this.sort * -1;
  }

  onSortOpenDoorCount() {
    this.userList.sort((a, b) =>
      b.openDoorRequestCount > a.openDoorRequestCount
        ? -1 * this.sort
        : 1 * this.sort
    );
    this.sort = this.sort * -1;
  }

  onSortDescription() {
    if (this.sort == 1)
      this.userList.sort((a, b) =>
        a.description?.localeCompare(b.description, undefined, {
          sensitivity: 'base',
        })
      );
    else {
      this.userList.sort((a, b) =>
        b.description?.localeCompare(a.description, undefined, {
          sensitivity: 'base',
        })
      );
    }
    this.sort = this.sort * -1;
  }

  onSortLastRequestDate(){
    this.userList.sort((a, b) =>
      b.lastOpenGateDate > a.lastOpenGateDate ? -1 * this.sort : 1 * this.sort
    );
    this.sort = this.sort * -1;
  }
}
