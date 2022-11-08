import { Language } from "./language-model";

export interface MessageTemplate {
  messageTemplateId: string;
  messageTemplateName: string;
}

export interface MessageTemplateType {
  id: string;
  description: string;
}

export interface MessageTemplatelListEP {
  records: Array<MessageTemplate>
}
export interface MessageAccount {
  messageAccountId: string;
  messageAccountName: string;
}
export interface MessageTemplateDetailEP {
  messageTemplateTypes: Array<MessageTemplateType>;
  messageAccounts: Array<MessageAccount>;
  languages: Array<Language>;
  records: Array<MessageTemplateDetailRecord>
}

export interface MessageTemplateDetailRecord {
  messageTemplateId?: string;
  messageTemplateName?: string;
  messageTemplateType?: string;
  messageAccountId?: string;
  subjects?: Array<MessageTemplateTranslation>;
  messageBodies?: Array<MessageTemplateTranslation>;
}

export interface MessageTemplateTranslation {
  languageId: number;
  translation: string;
}
