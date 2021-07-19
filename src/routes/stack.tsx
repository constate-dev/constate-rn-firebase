import React from 'react';
import {enableScreens} from 'react-native-screens';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import Login from '../pages/Login';
import Main from '../pages/Main';
import {GetCurrentUser} from '../services/firebase/auth/auth-methods';

enableScreens();
const {Navigator, Screen} = createNativeStackNavigator();

const Routes = () => {
  const initialRouteName = GetCurrentUser() ? 'Main' : 'Login';
  return (
    <Navigator
      initialRouteName={initialRouteName}
      screenOptions={{stackAnimation: 'slide_from_right', headerShown: false}}>
      <Screen name="Login" component={Login} />
      <Screen name="Main" component={Main} />
    </Navigator>
  );
};

export default Routes;
