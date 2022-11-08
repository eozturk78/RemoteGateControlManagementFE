export interface SiteManager{
  siteId: string;
  siteManagerId: string;
  userTitle: string;
  email: string;
  phoneNumber:string;
}

export interface SiteManagerResponse{
  records: Array<SiteManager>
}
