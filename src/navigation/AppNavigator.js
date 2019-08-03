import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LoginScreen from '../screens/LoginScreen';
import LoadingScreen from '../screens/LoadingScreen';
import MenuScreen from '../screens/MenuScreen';

export default createAppContainer(
  createSwitchNavigator({
    LoadingScreen: LoadingScreen,
    LoginScreen: LoginScreen,
    MenuScreen: MenuScreen,
    Main: MainTabNavigator,
  })
);
