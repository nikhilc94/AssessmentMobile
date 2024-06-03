import {combineReducers} from 'redux';

import CountryReducer from '../features/SelectCountry/store/reducer';

const appReducer = combineReducers({
  countryAndLanguage: CountryReducer,
});

export const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};
