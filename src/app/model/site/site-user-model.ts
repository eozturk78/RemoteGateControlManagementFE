export interface SiteUser{
  siteId: string;
  siteUserId: string;
  userTitle: string;
  email: string;
  phoneNumber:string;
  description: string;
}

export interface SiteUserResponse{
  records: Array<SiteUser>
}
