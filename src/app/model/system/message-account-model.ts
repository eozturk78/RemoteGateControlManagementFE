export interface MessageAccount {
  messageAccountId: string;
  messageAccountName: string;
  messageAccountType: string;
  senderName: string;
  email: string;
  number: string;
  server: string;
  userName: string;
  password: string;
  port: string;
  useSSL: string;
  domain: string;
}

export interface AccountType {
  id: number,
  description: string
}
export interface MessageAccountListEP {
  records: Array<MessageAccountResponse>
}

export interface MessageAccountDetailEP {
  messageAccountTypes: Array<AccountType>
  records: Array<MessageAccountResponse>
}
export interface MessageAccountRequest extends MessageAccount {
}

export interface MessageAccountResponse extends MessageAccount{
  accountTypeDesc: string;
}
