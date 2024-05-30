import {
  useTheme,
  withTheme,
  Provider as ThemeProvider,
} from 'react-native-paper';
import * as Countries from '../theme/countries';

export const getSelectedTheme = (countryCode: string) =>
  Countries[countryCode] || 'AE';

export {useTheme, withTheme, ThemeProvider};
