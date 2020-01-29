import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { createDrawerNavigator } from 'react-navigation-drawer';
import LoginScreen from 'screens/loginScreen';
import MainScreen from 'screens/mainScreen';
import SignUpScreen from 'screens/SignUpScreen';
import DiscountScreen from 'screens/discountScreen'
import QRScreen from 'screens/QRScreen';
import ListOfQrScreen from 'screens/listQrScreen';
import ReviewScreen from 'screens/reviewScreen';
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
    "Mis QRs": { screen: ListOfQrScreen },
    "QRScreen": { screen: QRScreen },
    "ReviewScreen": { screen: ReviewScreen }
  },
  {
    drawerWidth: 300,
    drawerPosition: 'left',
    initialRouteName: 'MainScreen',
  }
);

const MainStack = createStackNavigator({
  DiscountScreen,
  QRScreen,
  ReviewScreen,
  ListOfQrScreen
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
