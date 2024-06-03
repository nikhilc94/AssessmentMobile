import React, {useRef, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {NavigationContainer} from '@react-navigation/native';

import AppNavigator from '../navigation';
import {ThemeProvider, getSelectedTheme} from '../theme';

const Setup = () => {
  const navigationRef = useRef();
  const {i18n} = useTranslation();

  const {countryAndLanguage} = useSelector(state => state);

  const {country, language} = countryAndLanguage || {};

  useEffect(() => {
    !!language && i18n.changeLanguage(language);
  }, []);

  return (
    <ThemeProvider theme={getSelectedTheme(country)}>
      <NavigationContainer ref={navigationRef}>
        <AppNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default Setup;
