export interface ResetPassword {
  NewPassword?: string;
  Code?: string;
}

export interface ForgotPasswordRequest extends ResetPassword{
}

export interface ResetPasswordResponse extends ResetPassword{

}

export class PrepareResetPasswordRequest {
  // -- Get Model From Screen
  getModel(responseModel?: any) {
    let model: ForgotPasswordRequest = {};
    model!.NewPassword = responseModel!.newPassword;
    return model;
  }
  // -- Set Model To Screen
  setModel(responseModel?: ResetPassword) {
    let model: any = {};
    if (responseModel != null) {
      model!.newPassword = responseModel!.NewPassword;
    }
    return model;
  }
}
