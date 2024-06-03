import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import en from './en.json';
import ar from './ar.json';
import hi from './hi.json';
import {LANGUAGE} from '../features/SelectCountry/constants';

const resources = {en, ar, hi};

i18n.use(initReactI18next).init({
  resources,
  lng: LANGUAGE.EN,
  compatibilityJSON: 'v3',
});

export default {i18n};
