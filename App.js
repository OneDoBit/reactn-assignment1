import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { fromLeft, zoomIn, flipX, flipY } from 'react-navigation-transitions';

import HomeScreen from './screens/Home';
import SettingsScreen from './screens/Settings';
import LoginScreen from './screens/Login';

// Switch Navigator
const AuthNavigator = createSwitchNavigator(
  {
    Login: LoginScreen
  },
  {
    initialRouteName: 'Login'
  }
);

// Tab Navigator
const HomeNavigator = createBottomTabNavigator(
  {
    Home: { screen: HomeScreen },
    Settings: { screen: SettingsScreen },
  },
  {
    initialRouteName: 'Home'
  }
)

// app entry point
export default createAppContainer( // must have this wrapper (function) to have a starting point for the navigators
  createStackNavigator(
    {
      App: HomeNavigator,
      Auth: AuthNavigator
    },
    {
      initialRouteName: 'Auth', // which screen / navigations stack to begin with (string name is sensitive)
      transitionConfig: () => zoomIn(), // screen to screen transitions
      navigationOptions: {
        headerVisible: false, // remove top bar and make full screen
      },
      defaultNavigationOptions: { // remove swipe back gesture
        gesturesEnabled: false
      }
    }
  )
);