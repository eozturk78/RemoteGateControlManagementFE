import { Country } from "../location/country-model";

export interface SiteUserListModel{
  userId:string;
  siteUserId:string;
  siteId:string;
  siteName:string;
  countryName:string;
  cityName:string;
  userTitle:string;
  email:string;
  phoneNumber:string;
  description:string;
  isConfirmed: boolean,
  openDoorRequestCount:number;
}

export interface SiteUserListResponse{
  countries: Array<Country>
  records: Array<SiteUserListModel>
}
