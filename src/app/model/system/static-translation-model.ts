import { Language } from "./language-model";

export interface StaticTranslationResponse {
  Languages: Array<Language>;
  Records: Array<StaticTranslationRecords>
}

export interface StaticTranslationRecords {
  ResourceName: String;
  Translations: Array<Translation>
}

export interface Translation {
  LanguageId: String | undefined;
  Translate?: string;
}
