import { Country } from "../location/country-model";

export interface RepUserListModel{
  userId:string;
  siteUserId:string;
  siteId:string;
  siteName:string;
  countryName:string;
  cityName:string;
  userTitle:string;
  email:string;
  phoneNumber:string;
  openDoorRequestCount:number;
}

export interface ReportUserListResponse{
  countries: Array<Country>
  records: Array<RepUserListModel>
}
