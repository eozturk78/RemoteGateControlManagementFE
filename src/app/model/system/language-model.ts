
export class Language {
  id?: String;
  cultureName?: string;
  languageName?: string;
  shortName?: string;
  icon?: string;
}

export class LanguageResponse extends Language {
}
export class LanguageRequest extends Language {
  IconBase64?: string = ""
}

export class LanguageEPResponse {
  Records?: Array<Language>
}
