export interface ManagementUser {
  userId:string,
  email: string;
  userTitle: string;
}

export interface ManagementUserResponse {
  records: Array<ManagementUser>
}
