import {
  useTheme,
  withTheme,
  Provider as ThemeProvider,
} from 'react-native-paper';
import * as Countries from '../theme/countries';
import { COUNTRY } from '../features/SelectCountry/constants';

export const getSelectedTheme = (countryCode: string) =>
  Countries[countryCode] || COUNTRY.AE;

export {useTheme, withTheme, ThemeProvider};
