import {View, StyleSheet} from 'react-native';
import React from 'react';
import palettes, {padding} from '../Config';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Navbar = () => {
  return (
    <View style={styles.container}>
      <NavbarIcon iconName="home" selected={false} />
      <NavbarIcon iconName="wallet" selected={true} />
      <NavbarIcon iconName="chart-line" selected={false} />
      <NavbarIcon iconName="user" selected={false} />
    </View>
  );
};
interface NavbarIcon {
  selected?: boolean | undefined;
  iconName: string;
}
const NavbarIcon = ({selected, iconName}: NavbarIcon) => (
  <View style={styles.iconContainer}>
    <Icon
      name={iconName}
      color={selected ? palettes().accent : palettes().textPrimary}
      size={24}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: padding(3),
    backgroundColor: palettes().primary,
  },
  iconContainer: {
    padding: padding(2.5),
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default Navbar;
