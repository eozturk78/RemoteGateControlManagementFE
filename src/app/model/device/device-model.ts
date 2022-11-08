export interface Device {
  deviceId:string;
  serialNumber:string,
  ipAddress: string;
  ssId: string;
  password: string;
  urls: Array<UrlModel>
}

export interface DeviceResponse {
  records: Array<Device>
}

export interface UrlModel{
  url: string;
}
