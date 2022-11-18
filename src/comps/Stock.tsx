import {View, Text, StyleSheet, TextStyle} from 'react-native';
import React from 'react';
import palettes, {margin, padding} from '../Config';
import Icon from 'react-native-vector-icons/FontAwesome5';

export interface StockInterface {
  iconName: string;
  stockName: string;
  currentValue: number;
  stockAbbr: string;
  change: number;
}

const Stock = ({
  iconName,
  stockName,
  currentValue,
  stockAbbr,
  change,
}: StockInterface) => {
  const changeStyle = (loss: number): TextStyle => ({
    color: loss < 0 ? '#f00c' : '#0f0c',
    fontSize: 18,
    marginLeft: 'auto',
  });
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name={iconName} size={26} color={palettes().textPrimary} />
      </View>
      <View style={styles.info}>
        <View style={styles.infoContainer}>
          <Text style={styles.stockName}>{stockName}</Text>
          <Text style={styles.currentValue}>${currentValue}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.stockAbbr}>{stockAbbr}</Text>
          <Text style={changeStyle(change)}>({change}%)</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: palettes().secondary,
    marginTop: margin(0),
    marginHorizontal: margin(2),
    marginBottom: margin(1),
    padding: padding(1.5),
    borderRadius: margin(1),
    flexDirection: 'row',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    backgroundColor: palettes().tertiary,
    borderRadius: 35,
  },
  info: {
    alignSelf: 'center',
    marginLeft: margin(1.5),
    flex: 1,
  },
  currentValue: {
    marginLeft: 'auto',
    fontSize: 18,
    color: palettes().textPrimary,
  },
  infoContainer: {
    flexDirection: 'row',
  },
  stockName: {
    fontSize: 18,
    color: palettes().textPrimary,
  },
  stockAbbr: {
    fontSize: 18,
    color: palettes().textPrimary,
    fontWeight: '500',
  },
});
export default Stock;
