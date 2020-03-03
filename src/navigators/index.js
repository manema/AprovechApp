import React from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { createDrawerNavigator, DrawerNavigatorItems } from 'react-navigation-drawer';
import SafeAreaView from 'react-native-safe-area-view';
import LoginScreen from 'screens/loginScreen';
import MainScreen from 'screens/mainScreen';
import SignUpScreen from 'screens/SignUpScreen';
import DiscountScreen from 'screens/discountScreen'
import QRScreen from 'screens/QRScreen';
import ListOfQrScreen from 'screens/listQrScreen';
import ReviewScreen from 'screens/reviewScreen';
import AppLoader from 'screens/appLoader';
import Account from 'screens/account';
import ResetPasswordScreen from 'screens/resetPasswordScreen';
import InterestScreen from 'screens/interestScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfileImage from 'components/profileImage';
import LogoutButton from 'components/logoutButton';
import HomeButton from 'components/homeButton';
// import Button from 'components/common/button';

import { BLACK } from 'constants/style';

const AuthStack = createStackNavigator({ 
  LoginScreen,
  SignUpScreen,
});

const QRStack = createStackNavigator({
  "ListOfQrScreen": {
    screen: ListOfQrScreen,
    navigationOptions: {
      headerLeft: (props) => (<HomeButton {...props} />),
    },
  },
  // ListOfQrScreen,
  ReviewScreen,
  QRScreen
});

const InterestStack = createStackNavigator({
  'InterestScreen': {
    screen: InterestScreen,
    navigationOptions: {
      headerLeft: (props) => (<HomeButton {...props} />),
    }
  },
})


const DiscountStack = createStackNavigator({
  'DiscountScreen': {
    screen: DiscountScreen,
    navigationOptions: {
      headerLeft: (props) => (<HomeButton {...props} />),
    }
  },
  QRScreen,
  // MainScreen
});

const AccountStack = createStackNavigator({
  "Account": {
    screen: Account,
    navigationOptions: {
      headerLeft: (props) => (<HomeButton {...props} />),
    },
  },
  ResetPasswordScreen
})

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
    'InterestScreen': {
      screen: InterestStack,
      navigationOptions: {
        drawerLabel: 'Mis intereses',
        drawerIcon:
          <Icon name="heart" size={25} color={BLACK} />,
      }
    },
    // "Mis QRs": { screen: QRStack },
    'Mis QR': {
      screen: QRStack,
      navigationOptions: {
        drawerIcon: <Icon name="qrcode" size={30} color={BLACK} />
      }
    },
    // "QRScreen": { screen: QRScreen },
    // "ReviewScreen": { screen: ReviewScreen },
    "Account": { 
      screen: AccountStack,
      navigationOptions: {
        drawerIcon: <Ionicons name="ios-person" size={30} color={BLACK} />
      }
    },
    // "ResetPasswordScreen": { screen: ResetPasswordScreen } 
  },
  {
    contentComponent: (props) => (
      <ScrollView>
        <SafeAreaView
          forceInset={{ top: 'always', horizontal: 'never' }}
        >
          <ProfileImage />
          <DrawerNavigatorItems {...props} />
          <LogoutButton />
        </SafeAreaView>
      </ScrollView>),
    drawerWidth: 300,
    drawerPosition: 'left',
    initialRouteName: 'MainScreen',
  }
);

// const DiscountStack = createStackNavigator({
//   DiscountScreen,
//   QRScreen
// });

const MainStack = createStackNavigator({
  // DiscountScreen,
  // QRScreen,
  ReviewScreen,
  // ListOfQrScreen
});


const AppNavigator = createAnimatedSwitchNavigator(
  {
    AppLoader,
    AuthStack,
    AppStack,
    DiscountStack,


    // AppStack,
    // DiscountStack,
    // QRStack
    // MainStack
  },
  {
    initialRouteName: 'AuthStack',
  },
);

export default createAppContainer(AppNavigator);
