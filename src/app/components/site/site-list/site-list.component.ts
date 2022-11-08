import { City, CityResponse } from './../../../model/location/city-model';
import { Country } from './../../../model/location/country-model';
import { ManagementService } from 'src/app/services/user/management.service';
import { Component, OnInit } from '@angular/core';
import { Site, SiteResponse } from 'src/app/model/site/site-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-site-list',
  templateUrl: './site-list.component.html',
  styleUrls: ['./site-list.component.scss'],
})
export class SiteListComponent implements OnInit {
  searchText!: string;
  countryId!: string;
  cityId?:string;
  siteResp!: SiteResponse;
  countryList!: Array<Country>;
  cityList!: Array<City>;
  records!: Array<Site>
  page = 1;
  pageSize = 10;
  constructor(
    private managementService: ManagementService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.onSearch();
  }
  onSearch() {
    this.managementService
      .getSiteList(this.countryId, this.cityId, this.searchText)
      .subscribe((data: SiteResponse) => {
        if (this.countryList == null) {
          this.countryList = data.countries;
          this.countryId = this.countryList[0].countryId;
          this.onChangeCountry();
        }
        this.records = data.records;
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
  onOpenDetail(siteId?: string) {
    this.router.navigate(['/main/site-detail', siteId]);
  }
}
