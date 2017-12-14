import {observable} from "mobx";
import * as Strings from '../../common/Strings';

const defaultLanguage = 'en_US';

class Localization {
    @observable currentLanguage = defaultLanguage;

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
        ];
    }

    getString(name, ...params) { //params are for pluralization usage (future)
        console.log(Strings);
        let translations = Strings[this.currentLanguage];
        if (!translations) {
            translations = Strings[defaultLanguage];
        }
        let desiredString = translations[name];
        if (!desiredString) {
            desiredString = '';
        }
        return desiredString;
    }
}

export default new Localization();