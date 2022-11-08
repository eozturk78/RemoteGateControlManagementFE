import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { City, CityResponse } from 'src/app/model/location/city-model';
import { Country } from 'src/app/model/location/country-model';
import { ReportUserListResponse, RepUserListModel } from 'src/app/model/report/rep-user-list';
import { ManagementUserResponse } from 'src/app/model/settings/management-user-model';
import { ManagementService } from 'src/app/services/user/management.service';

@Component({
  selector: 'app-rep-user-list',
  templateUrl: './rep-user-list.component.html',
  styleUrls: ['./rep-user-list.component.scss']
})
export class RepUserListComponent implements OnInit {
  siteId!: string;
  searchText!: string;
  countryId!: string;
  cityId?:string = "";
  siteResp!: ReportUserListResponse;
  countryList!: Array<Country>;
  cityList!: Array<City>;
  userResp: ReportUserListResponse | undefined;
  constructor(
    private managementService: ManagementService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.onSearch();
  }

  onSearch() {
    this.managementService
      .getRepUserList(this.siteId, this.countryId, this.cityId,this.searchText)
      .subscribe((data: ReportUserListResponse) => {
        if(this.countryList==null){
          this.countryList = data.countries;
          this.countryId = this.countryList[0].countryId;
          this.onChangeCountry();
        }
        this.userResp = data;
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

}
