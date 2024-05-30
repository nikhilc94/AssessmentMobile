import React, {useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AppNavigator from '../navigation';
import { ThemeProvider, getSelectedTheme } from '../theme';

const Setup = () => {
  const navigationRef = useRef();
  return (
    <ThemeProvider theme={getSelectedTheme("AE")}>
    <NavigationContainer ref={navigationRef}>
      <AppNavigator />
    </NavigationContainer>
    </ThemeProvider>
  );
};

export default Setup;
