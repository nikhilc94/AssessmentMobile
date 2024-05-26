import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import en from './en.json';

const resources = {
  en: en,
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  compatibilityJSON: 'v3',
});

export default {i18n};
