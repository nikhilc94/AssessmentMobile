import React, {useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AppNavigator from '../navigation';

const Setup = () => {
  const navigationRef = useRef();
  return (
    <NavigationContainer ref={navigationRef}>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default Setup;
