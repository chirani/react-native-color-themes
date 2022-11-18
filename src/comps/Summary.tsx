import {View, Text, StyleSheet, TextStyle} from 'react-native';
import React from 'react';
import palettes, {margin, padding} from '../Config';

interface SummaryInterface {
  balance: string;
  currency: string;
  change: number;
  changePercentage: number;
}

const Summary = ({
  balance,
  currency,
  change,
  changePercentage,
}: SummaryInterface) => {
  const changeStyle = (loss: number): TextStyle => ({
    color: loss < 0 ? '#f00c' : '#0f0c',
    fontSize: 18,
  });
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Current Balance</Text>
      <Text style={styles.balance}>
        <Text style={styles.currency}>{currency}</Text> {balance}
      </Text>
      <View style={styles.indexes}>
        <Text style={changeStyle(change)}>
          <Text>{change} $</Text>
        </Text>
        <View style={{marginHorizontal: margin(0.5)}} />
        <Text style={changeStyle(change)}>
          <Text>({changePercentage}%)</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: padding(1.5),
    alignItems: 'center',
  },
  balance: {
    fontSize: 42,
    color: palettes().textPrimary,
  },
  currency: {
    fontSize: 42,
    color: palettes().textSecondary,
  },
  indexes: {
    flexDirection: 'row',
    padding: padding(1),
    backgroundColor: palettes().secondary,
  },
  title: {
    fontSize: 18,
    color: palettes().textSecondary,
    marginBottom: margin(1),
  },
});

export default Summary;
