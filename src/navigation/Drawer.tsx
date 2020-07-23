import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from './DrawerContent';
import * as Stacks from './Stacks';

const DrawerNavigator = createDrawerNavigator();

/**
 * Global options for the drawer component. Adjust options
 * for individual screens in the Drawer Screen's options.
 */
const drawerOptions = {
  swipeEnabled: false,
  gestureEnabled: true, // enable/disable overlay click
};

const Drawer = () => (
  <DrawerNavigator.Navigator
    drawerContent={({navigation}) => <DrawerContent navigation={navigation} />}
    drawerType="front">
    <DrawerNavigator.Screen
      name="HomeStack"
      component={Stacks.HomeStack}
      options={drawerOptions}
    />
  </DrawerNavigator.Navigator>
);

export default Drawer;
