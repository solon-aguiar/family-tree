'use strict'
import {observable} from "mobx";

class Localization {
  @observable currentLanguage = 'en_US';

  getAvailableLanguages() {
    return [
      {
        language_code: 'en_US',
        language_name: 'US English'
      },
      {
         language_code: 'pt_BR',
         language_name: 'Português do Brasil'
      }
    ]
  }
}

export default new Localization();