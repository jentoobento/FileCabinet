import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Icon} from 'react-native-elements';
import Home from '../screens/Home/Home';
import List from '../screens/List/List';
import {COLORS} from '../resources/colors';

// typescript schema
interface List {
  iconName: string;
  iconType: string;
  name: string;
  id: string;
}

/**
 * Global header bar options. Set custom behavior in individual Screens.
 * @param {Object} navigation The navigation object from stack screen options
 * @param {Object} props Any extra props to be added
 */
const screenOptions = (navigation, props = {}) => ({
  gestureEnabled: false,
  headerTintColor: COLORS.grey,
  headerTitle: 'FileCabinet',
  headerTitleAlign: 'center',
  headerRight: () => (
    <Icon
      name="ellipsis-vertical"
      type="ionicon"
      color={COLORS.grey}
      onPress={() => navigation.openDrawer()}
    />
  ),
  headerStyle: {
    shadowColor: 'transparent',
    backgroundColor: COLORS.white,
  },
  ...props,
});

const HomeStackNavigator = createStackNavigator();

export const HomeStack = () => (
  <HomeStackNavigator.Navigator
    initialRouteName="Home"
    headerMode="float"
    screenOptions={({navigation}) => screenOptions(navigation)}>
    <HomeStackNavigator.Screen
      name="Home"
      component={Home}
      options={({navigation}) => ({
        headerLeft: () => (
          <Icon
            name="ellipsis-vertical"
            type="ionicon"
            color={COLORS.grey}
            onPress={() => navigation.openDrawer()}
          />
        ),
        headerRight: null,
      })}
    />
    <HomeStackNavigator.Screen
      name="List"
      component={List}
      options={({route}) => ({
        headerTitle: (
          <Icon
            name={route.params.iconName}
            type={route.params.iconType}
            color={COLORS.grey}
            size={46}
          />
        ),
      })}
    />
  </HomeStackNavigator.Navigator>
);
