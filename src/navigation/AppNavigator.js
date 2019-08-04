import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LoginScreen from '../screens/LoginScreen';
import LoadingScreen from '../screens/LoadingScreen';
import ManagementScreen from '../screens/ManagementScreen';
import ManageScreen from '../screens/ManageScreen';
import HomeScreen from '../screens/ManageScreen';

export default createAppContainer(
  createSwitchNavigator({
    LoadingScreen: LoadingScreen,
    LoginScreen: LoginScreen,
    HomeScreen: HomeScreen,
    ManageScreen: ManageScreen,
    ManagementScreen: ManagementScreen,
    Main: MainTabNavigator,
  })
);
