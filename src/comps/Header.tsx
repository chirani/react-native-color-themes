import {View, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import palettes, {margin, padding, setColorTheme} from '../Config';

const Header = () => {
  const [first, setfirst] = useState(1);
  return (
    <View style={styles.container}>
      <IconBox iconName={'align-horizontal-left'} />
      <View style={{marginRight: 'auto'}} />
      <IconBox
        iconName={'tune-variant'}
        onPress={() => {
          setColorTheme('main');
          setfirst(2);
        }}
      />
      <View style={{marginRight: margin(1.5)}} />
      <IconBox iconName={'line-scan'} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 12,
    flexDirection: 'row',
    width: '100%',
  },
  iconContainer: {
    borderRadius: 6,
    padding: padding(1.5),
    backgroundColor: palettes().secondary,
  },
});

interface IconBoxProps {
  iconName: string;
  onPress: any;
}
const IconBox = ({iconName, onPress}: IconBoxProps) => (
  <TouchableOpacity style={styles.iconContainer} onPress={onPress}>
    <Icon name={iconName} size={24} color={palettes().textPrimary} />
  </TouchableOpacity>
);

export default Header;
