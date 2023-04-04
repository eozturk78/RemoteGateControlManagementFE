export interface Device {
  deviceId:string;
  serialNumber:string,
  ipAddress: string;
  buildingName: string;
  ssId: string;
  password: string;
  accessInternet: boolean;
  urls: Array<UrlModel>
}

export interface DeviceResponse {
  records: Array<Device>
}

export interface UrlModel{
  url: string;
}
