import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import palettes, {margin, padding} from '../Config';

const Actions = () => {
  return (
    <View style={styles.container}>
      <ActionIcon iconName="swap-horizontal" />
      <ActionIcon iconName="arrow-top-right" />
      <ActionIcon iconName="arrow-down" />
      <ActionIcon iconName="note-multiple-outline" />
    </View>
  );
};
interface ActionIconInterface {
  iconName: string;
}
const ActionIcon = ({iconName}: ActionIconInterface) => (
  <TouchableOpacity style={styles.iconContainer}>
    <Icon name={iconName} size={32} color={palettes().textPrimary} />
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: margin(3),
    marginBottom: margin(1),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  iconContainer: {
    borderRadius: padding(1.5),
    padding: padding(1.5),
    backgroundColor: palettes().accent,
    marginHorizontal: margin(1),
    justifyContent: 'center',
  },
});
export default Actions;
