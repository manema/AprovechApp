import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { createDrawerNavigator } from 'react-navigation-drawer';
import LoginScreen from 'screens/loginScreen';
import MainScreen from 'screens/mainScreen';
import SignUpScreen from 'screens/SignUpScreen';
import DiscountScreen from 'screens/discountScreen'
import AppLoader from 'screens/appLoader';
import Icon from 'react-native-vector-icons/FontAwesome';

const AuthStack = createStackNavigator({ 
  LoginScreen,
  SignUpScreen,
});

const AppStack = createDrawerNavigator(
  {
    "MainScreen": { 
      screen: MainScreen,
      navigationOptions: {
        drawerLabel: 'Inicio',
        drawerIcon: (
          <Icon name="bars" size={30} color="#900" />
        ),
      }, 
    },
    "LoginScreen": { screen: LoginScreen },
  },
  {
    drawerWidth: 300,
    drawerPosition: 'left',
    initialRouteName: 'MainScreen',
  }
);

const MainStack = createStackNavigator({
  DiscountScreen
});

const AppNavigator = createAnimatedSwitchNavigator(
  {
    AppLoader,
    AuthStack,
    AppStack,
    MainStack
  },
  {
    initialRouteName: 'AuthStack',
  },
);

export default createAppContainer(AppNavigator);
