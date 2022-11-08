export interface SiteUser{
  siteId: string;
  siteUserId: string;
  userTitle: string;
  email: string;
  phoneNumber:string;
}

export interface SiteUserResponse{
  records: Array<SiteUser>
}
