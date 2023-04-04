import { SiteDeviceResponse } from './../../model/site/site-device-model';
import { City, CityResponse } from './../../model/location/city-model';
import { Device, DeviceResponse } from 'src/app/model/device/device-model';
import { ManagementUser } from './../../model/settings/management-user-model';

import { Injectable } from '@angular/core';
import { HttpServiceService } from '../http/http-service.service';
import { Observable } from 'rxjs';
import { LoginResponse } from 'src/app/model/login/login-model';
import {
  MessageTemplateDetailEP,
  MessageTemplateDetailRecord,
  MessageTemplatelListEP,
} from 'src/app/model/system/message-template-model';
import {
  MessageAccountDetailEP,
  MessageAccountListEP,
  MessageAccountRequest,
} from 'src/app/model/system/message-account-model';
import { SystemParametersResponse } from 'src/app/model/system/system-parameters-model';
import { StaticTranslationResponse } from 'src/app/model/system/static-translation-model';
import { ManagementUserResponse } from 'src/app/model/settings/management-user-model';
import { SiteResponse } from 'src/app/model/site/site-model';
import { SiteManagerResponse } from 'src/app/model/site/site-manager-model';
import { SiteUserResponse } from 'src/app/model/site/site-user-model';
import { ReportUserListResponse } from 'src/app/model/report/rep-user-list';

@Injectable({
  providedIn: 'root',
})
export class ManagementService {
  constructor(private httpService: HttpServiceService) {}

  private baseUrl = 'Management';

  login(params: any): Observable<LoginResponse> {
    return this.httpService.post<LoginResponse>(
      `${this.baseUrl}/login`,
      params
    );
  }
  forgotPassword(params: any): Observable<any> {
    return this.httpService.post<any>(`${this.baseUrl}/forgotPassword`, params);
  }
  resetPassword(params: any): Observable<any> {
    return this.httpService.post<any>(`${this.baseUrl}/resetPassword`, params);
  }
  changePassword(params: any): Observable<any> {
    return this.httpService.post<any>(`${this.baseUrl}/changePassword`, params);
  }
  getMessageTemplates(): Observable<MessageTemplatelListEP> {
    let url = `${this.baseUrl}/GetMessageTemplateList`;
    return this.httpService.get<MessageTemplatelListEP>(url);
  }

  getMessageTemplateDetail(id?: string): Observable<MessageTemplateDetailEP> {
    let url = `${this.baseUrl}/GetMessageTemplateDetails`;
    if (id != null) url = `${url}?messageTemplateId=${id}`;
    return this.httpService.get<MessageTemplateDetailEP>(url);
  }

  postMessageTemplates(
    params: MessageTemplateDetailRecord
  ): Observable<MessageTemplateDetailEP> {
    let url = `${this.baseUrl}/SetMessageTemplate`;
    return this.httpService.post<MessageTemplateDetailEP>(url, params);
  }

  deleteMessageTemplate(id: string): Observable<MessageTemplateDetailEP> {
    return this.httpService.delete<MessageTemplateDetailEP>(
      `${this.baseUrl}/DeleteMessageTemplate`,
      id
    );
  }

  // -- Message account
  getMessageAccounts(): Observable<MessageAccountListEP> {
    let url = `${this.baseUrl}/GetMessageAccountList`;
    return this.httpService.get<MessageAccountListEP>(url);
  }
  getMessageAccountDetail(id?: string): Observable<MessageAccountDetailEP> {
    let url = `${this.baseUrl}/GetMessageAccountDetails`;
    if (id != null) url = `${url}?messageAccountId=${id}`;
    return this.httpService.get<MessageAccountDetailEP>(url);
  }
  postMessageAccounts(
    params: MessageAccountRequest
  ): Observable<MessageTemplateDetailEP> {
    let url = `${this.baseUrl}/SetMessageAccount`;
    return this.httpService.post<MessageTemplateDetailEP>(url, params);
  }
  deleteMessageAccount(id: string): Observable<MessageTemplateDetailEP> {
    let url = `${this.baseUrl}/DeleteMessageAccount?messageAccountId=${id}`;
    return this.httpService.delete<MessageTemplateDetailEP>(url);
  }
  //--

  // -- ManagementUser
  getManagementUsers(searchText?: string): Observable<ManagementUserResponse> {
    let url = `${this.baseUrl}/GetManagementUserList`;
    if (searchText != null)  url = `${url}?searchText=${searchText}`;
    return this.httpService.get<ManagementUserResponse>(url);
  }
  getManagementUserDetail(id?: string): Observable<ManagementUserResponse> {
    let url = `${this.baseUrl}/GetManagementUserDetails`;
    if (id != null) url = `${url}?userId=${id}`;
    return this.httpService.get<ManagementUserResponse>(url);
  }
  postManagementUser(
    params: ManagementUser
  ): Observable<ManagementUserResponse> {
    let url = `${this.baseUrl}/SetManagementUser`;
    return this.httpService.post<ManagementUserResponse>(url, params);
  }
  postResentPasswordEmail(userId: string): Observable<ManagementUserResponse> {
    let url = `${this.baseUrl}/SendResetPasswordEmail?userId=${userId}`;
    return this.httpService.post<ManagementUserResponse>(url, null);
  }
  deleteManagementUser(id: string): Observable<ManagementUserResponse> {
    let url = `${this.baseUrl}/DeleteManagementUser?userId=${id}`;
    return this.httpService.delete<ManagementUserResponse>(url);
  }
  //--

  // -- Device
  getManagementDevices(searchText?: string): Observable<DeviceResponse> {
    let url = `${this.baseUrl}/GetDeviceList`;
    if (searchText != null) url += `?searchText=${searchText}`;
    return this.httpService.get<DeviceResponse>(url);
  }
  getUnAssignedDeviceList(searchText?: string): Observable<DeviceResponse> {
    let url = `${this.baseUrl}/GetUnAssignedDeviceList`;
    if (searchText != null) url += `?searchText=${searchText}`;
    return this.httpService.get<DeviceResponse>(url);
  }
  getDeviceDetail(id?: string): Observable<DeviceResponse> {
    let url = `${this.baseUrl}/GetDeviceDetails`;
    if (id != null) url += `?deviceId=${id}`;
    return this.httpService.get<DeviceResponse>(url);
  }
  postDevice(params: Device): Observable<DeviceResponse> {
    let url = `${this.baseUrl}/SetDevice`;
    return this.httpService.post<DeviceResponse>(url, params);
  }
  deleteDevice(id: string): Observable<DeviceResponse> {
    let url = `${this.baseUrl}/DeleteDevice?deviceId=${id}`;
    return this.httpService.delete<DeviceResponse>(url);
  }
  setSiteDevice(params: any): Observable<any> {
    let url = `${this.baseUrl}/SetSiteDevice`;
    return this.httpService.post<any>(url, params);
  }
  deleteSiteDevice(id?: string): Observable<SiteDeviceResponse> {
    let url = `${this.baseUrl}/DeleteSiteDevice`;
    if (id != null) url = `${url}?siteDeviceId=${id}`;
    return this.httpService.delete<SiteDeviceResponse>(url);
  }
  getSiteDeviceList(
    siteId?: string,
    searchText?: string
  ): Observable<SiteDeviceResponse> {
    let url = `${this.baseUrl}/GetSiteDeviceList?1=1`;
    if (siteId != null) url += `&siteId=${siteId}`;
    return this.httpService.get<SiteDeviceResponse>(url);
  }
  //--

  // -- Static Translations
  getStaticTranslations(): Observable<StaticTranslationResponse> {
    let url = `${this.baseUrl}/GetStaticTranslations`;
    return this.httpService.get<StaticTranslationResponse>(`${url}`);
  }
  setStaticTranslations(params?: any): Observable<SystemParametersResponse> {
    return this.httpService.post<SystemParametersResponse>(
      `${this.baseUrl}/SetStaticTranslations`,
      params
    );
  }
  //--
  // -- System Parameters
  getSystemParameters(): Observable<Array<SystemParametersResponse>> {
    let url = `${this.baseUrl}/GetSysParameters`;
    return this.httpService.get<Array<SystemParametersResponse>>(`${url}`);
  }
  postSystemParameters(params?: any): Observable<SystemParametersResponse> {
    return this.httpService.post<SystemParametersResponse>(
      `${this.baseUrl}/SetSysParameters`,
      params
    );
  }
  //--
  // -- Site
  getSiteList(
    countryId?: string,
    cityId?: string,
    searchText?: string
  ): Observable<SiteResponse> {
    let url = `${this.baseUrl}/GetSiteList?1=1`;
    if (countryId != null) url += `&countryId=${countryId}`;
    if (cityId != null) url += `&cityId=${cityId}`;
    if (searchText != null) url += `&searchText=${searchText}`;
    return this.httpService.get<SiteResponse>(url);
  }


  getSiteDetail(id?: string): Observable<SiteResponse> {
    let url = `${this.baseUrl}/GetSiteDetails`;
    if (id != null) url = `${url}?siteId=${id}`;
    return this.httpService.get<SiteResponse>(url);
  }
  postSite(params: Device): Observable<SiteResponse> {
    let url = `${this.baseUrl}/SetSite`;
    return this.httpService.post<SiteResponse>(url, params);
  }
  deleteSite(id?: string): Observable<SiteResponse> {
    let url = `${this.baseUrl}/DeleteSite`;
    if (id != null) url = `${url}?siteId=${id}`;
    return this.httpService.delete<SiteResponse>(url, id);
  }
  //--

  // -- Site Manager
  getSiteManagerList(
    siteId?: string,
    searchText?: string
  ): Observable<SiteManagerResponse> {
    let url = `${this.baseUrl}/GetSiteManagerList?1=1`;
    if (siteId != null) url += `&siteId=${siteId}`;
    if (searchText != null) url += `&searchText=${searchText}`;
    return this.httpService.get<SiteManagerResponse>(url);
  }
  getSiteManagerDetail(id?: string): Observable<SiteManagerResponse> {
    let url = `${this.baseUrl}/GetSiteManagerDetails`;
    if (id != null) url = `${url}?siteManagerId=${id}`;
    return this.httpService.get<SiteManagerResponse>(url);
  }
  postSiteManager(params: Device): Observable<SiteManagerResponse> {
    let url = `${this.baseUrl}/SetSiteManager`;
    return this.httpService.post<SiteManagerResponse>(url, params);
  }
  deleteSiteManager(id?: string): Observable<SiteManagerResponse> {
    let url = `${this.baseUrl}/DeleteSiteManager`;
    if (id != null) url = `${url}?siteManagerId=${id}`;
    return this.httpService.delete<SiteManagerResponse>(url);
  }
  //--

  // -- Site User
  getSiteUserList(
    siteId?: string,
    searchText?: string
  ): Observable<SiteUserResponse> {
    let url = `${this.baseUrl}/GetSiteUserList?1=1`;
    if (siteId != null) url += `&siteId=${siteId}`;
    if (searchText != null) url += `&searchText=${searchText}`;
    return this.httpService.get<SiteUserResponse>(url);
  }
  getSiteUserDetail(id?: string): Observable<SiteUserResponse> {
    let url = `${this.baseUrl}/GetSiteUserDetails`;
    if (id != null) url = `${url}?siteUserId=${id}`;
    return this.httpService.get<SiteUserResponse>(url);
  }
  postSiteUser(params: Device): Observable<SiteUserResponse> {
    let url = `${this.baseUrl}/SetSiteUser`;
    return this.httpService.post<SiteUserResponse>(url, params);
  }
  deleteSiteUser(id?: string): Observable<SiteUserResponse> {
    let url = `${this.baseUrl}/DeleteSiteUser`;
    if (id != null) url = `${url}?siteUserId=${id}`;
    return this.httpService.delete<SiteUserResponse>(url);
  }
  updateSiteUserDescription(params: object): Observable<object> {
    let url = `${this.baseUrl}/UpdateSiteUserDescription`;
    return this.httpService.post<object>(url, params);
  }
  //--

  //  -- GetCityList
  getCityList(countryId?: string): Observable<CityResponse> {
    let url = `${this.baseUrl}/GetCityList`;
    if (countryId != null) url = `${url}?countryId=${countryId}`;
    return this.httpService.get<CityResponse>(url);
  }

  //  -- GetCityList
  confirmUser(userId?: string,confirmType?: number): Observable<CityResponse> {
    let url = `${this.baseUrl}/ConfirmUser`;
    if (userId != null) url = `${url}?userId=${userId}&confirmType=${confirmType}`;
    return this.httpService.get<CityResponse>(url);
  }
  // -- Report
  // -- User List Report

  getAllSiteUserList(
    siteId?: string,
    countryId?: string,
    cityId?: string,
    searchText?: string
  ): Observable<ReportUserListResponse> {
    let url = `${this.baseUrl}/GetAllSiteUserList?1=1`;
    if (siteId != null) url += `&siteId=${siteId}`;
    if (countryId != null) url += `&countryId=${countryId}`;
    if (cityId != null) url += `&cityId=${cityId}`;
    if (searchText != null) url += `&searchText=${searchText}`;
    return this.httpService.get<ReportUserListResponse>(url);
  }

  // -- Report
  // -- User List Report

  getRepUserList(
    siteId?: string,
    countryId?: string,
    cityId?: string,
    searchText?: string
  ): Observable<ReportUserListResponse> {
    let url = `${this.baseUrl}/RepUserList?1=1`;
    if (siteId != null) url += `&siteId=${siteId}`;
    if (countryId != null) url += `&countryId=${countryId}`;
    if (cityId != null) url += `&cityId=${cityId}`;
    if (searchText != null) url += `&searchText=${searchText}`;
    return this.httpService.get<ReportUserListResponse>(url);
  }
}
