export interface SiteDevice{
  siteDeviceId: string;
  deviceId: string;
  ipAddress: string;
  serialNumber:string;
  latitude: number;
  longitude: number;
}

export interface SiteDeviceResponse{
  records: Array<SiteDevice>
}
