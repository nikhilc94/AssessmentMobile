import * as Actions from './actions';
import {COUNTRY} from '../constants';

const initialState: any = {country: COUNTRY.UAE};

export default function (state = initialState, action) {
  switch (action.type) {
    case Actions.SELECT_COUNTRY:
      return {...state, country: action.payload};
    default:
      return state;
  }
}
