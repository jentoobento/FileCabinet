import React from 'react';
import {Text, View, StyleSheet, FlatList, Pressable} from 'react-native';
import {COLORS} from '../resources/colors';
import strings from '../resources/strings';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  image: {
    width: '100%',
    height: 50,
    marginTop: 30,
    marginBottom: 15,
  },
  list: {
    flex: 1,
    width: '90%',
  },
  listItemSeparator: {
    height: 3,
    backgroundColor: COLORS.grey,
  },
  item: {
    marginVertical: 20,
  },
  itemText: {
    fontSize: 20,
    color: COLORS.grey,
  },
});

/**
 * This is the parent component for DrawerShelf and child component of
 * Drawer Navigator. This comprises everything that shows up inside the Drawer
 * Navigator. Properties that affect the drawer such as drawerType, drawerPosition,
 * overlayColor, etc should be handled in the parent Drawer Navigator.
 * Renders a scrollable list.
 * @param {Object} navigation Navigation prop from parent Navigation Container
 */
const DrawerContent = () => {
  const drawerDataList = [
    {
      id: '0',
      text: strings.edit_list_details,
      styles: {},
      textStyles: {},
      onPress: () => {},
    },
    {
      id: '1',
      text: strings.delete_list,
      styles: {},
      textStyles: {
        color: COLORS.darkRed,
      },
      onPress: () => {},
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyboardDismissMode="on-drag"
        style={styles.list}
        data={drawerDataList}
        ItemSeparatorComponent={() => <View style={styles.listItemSeparator} />}
        renderItem={({item}) => (
          <Pressable
            onPress={() => item.onPress()}
            style={[styles.item, item.styles]}>
            <Text style={[styles.itemText, item.textStyles]}>{item.text}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default DrawerContent;
