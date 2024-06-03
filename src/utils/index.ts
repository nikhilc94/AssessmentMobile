import {LANGUAGE} from '../features/SelectCountry/constants';

const rtlList = [LANGUAGE.AR];

export const isRTLLanguage = (language: LANGUAGE) => rtlList.includes(language);
