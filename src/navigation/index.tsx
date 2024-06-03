import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import * as Routes from './routes';
import SignUp from '../features/SignUp';
import Dashboard from '../features/Dashboard';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName={Routes.ROUTE_SIGN_UP}>
      <Stack.Screen name={Routes.ROUTE_SIGN_UP} component={SignUp} />
      <Stack.Screen name={Routes.ROUTE_DASHBOARD} component={Dashboard} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
