import React from 'react';
import {Alert} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Icon} from 'react-native-elements';
import Home from '../screens/Home/Home';
import List from '../screens/List/List';
import {COLORS} from '../resources/colors';

// typescript schema
interface Route {
  route: Params;
}
interface Params {
  params: List;
}
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
const screenOptions = (navigation, props) => ({
  gestureEnabled: false,
  headerTintColor: COLORS.grey,
  headerTitle: 'FileCabinet',
  headerTitleAlign: 'center',
  headerRight: () => (
    <Icon
      name="ellipsis-vertical"
      type="ionicon"
      color={COLORS.grey}
      onPress={() => Alert.alert('Hi', 'Look at me!')}
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
    screenOptions={screenOptions}>
    <HomeStackNavigator.Screen name="Home" component={Home} />
    <HomeStackNavigator.Screen
      name="List"
      component={List}
      options={({route: {params}}: Route) => ({
        headerTitle: (
          <Icon
            name={params.iconName}
            type={params.iconType}
            color={COLORS.grey}
            size={46}
          />
        ),
      })}
    />
  </HomeStackNavigator.Navigator>
);
