import { City } from "../location/city-model";
import { Country } from "../location/country-model";

export interface Site {
  siteId: string;
  buildingName:string;
  countryName:string,
  cityName: string;
  address: string;
  lat: string;
  long: string;
}

export class SiteResponse {
  countries!: Array<Country>
  cities!: Array<City>
  records!: Array<Site>
}
