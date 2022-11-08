export interface SystemParametersResponse {
  GroupId: number;
  GroupName: string;
  Parameters: Array<Parameter>
}

export interface Parameter {
  ParameterId: number;
  ParameterType: number;
  ParameterName: string;
  Value: string;
  Options: Array<Option>
}

export interface Option {
  Id: string;
  Description: string;
}
