import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import * as Routes from './routes';
import SignUp from '../features/SignUp'

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName={Routes.ROUTE_SIGN_UP}>
      <Stack.Screen name={Routes.ROUTE_SIGN_UP} component={SignUp} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
