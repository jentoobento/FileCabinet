import React from 'react';
import {Alert} from 'react-native';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import {Icon} from 'react-native-elements';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import COLORS from '../resources/colors';

/**
 * Global header bar options. Set custom behavior in individual Screens.
 * @param {Object} navigation The navigation object from stack screen options
 */
const screenOptions = (navigation, props) => ({
  gestureEnabled: false,
  headerTintColor: COLORS.lightBlue,
  headerTitle: 'hello',
  headerTitleAlign: 'center',
  headerRight: () => (
    <Icon
      name='favorite'
      type='material'
      onPress={() => Alert.alert('Hi', 'Look at me!')}
    />
  ),
  ...props,
});

const HomeStackNavigator = createStackNavigator();

export const HomeStack = () => (
  <HomeStackNavigator.Navigator
    initialRouteName="Home"
    headerMode="float"
    screenOptions={screenOptions}
  >
    <HomeStackNavigator.Screen
      name="Home"
      component={Home}
    />
    <HomeStackNavigator.Screen
      name="Profile"
      component={Profile}
      options={({navigation}) => (
        screenOptions(
          navigation,
          {
            headerLeft: () => (
              <HeaderBackButton
                onPress={() => navigation.goBack()}
                tintColor={COLORS.pink}
                label="Le Back"
                labelVisible
              />
            ),
          },
      ))}
    />
  </HomeStackNavigator.Navigator>
);
