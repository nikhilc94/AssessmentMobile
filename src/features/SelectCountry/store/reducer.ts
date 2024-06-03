import * as Actions from './actions';
import {COUNTRY, LANGUAGE} from '../constants';

const initialState: any = {country: COUNTRY.AE, language: LANGUAGE.EN};

export default function (state = initialState, action) {
  switch (action.type) {
    case Actions.SELECT_COUNTRY:
      return {...state, country: action.payload};

    case Actions.SELECT_LANGUAGE:
      return {...state, language: action.payload};
    default:
      return state;
  }
}
