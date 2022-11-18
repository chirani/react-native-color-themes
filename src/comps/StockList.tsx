import {FlatList} from 'react-native';
import React from 'react';
import Stock from './Stock';

const stockData = [
  {
    iconName: 'btc',
    stockName: 'Bicoin',
    stockAbbr: 'BTC',
    currentValue: 35000,
    change: 3,
  },
  {
    iconName: 'ethereum',
    stockName: 'Ethereum',
    stockAbbr: 'ETH',
    currentValue: 1500,
    change: 3.12,
  },
  {
    iconName: 'monero',
    stockName: 'Monero',
    stockAbbr: 'Monero',
    currentValue: 35000,
    change: 3.2,
  },
  {
    iconName: 'atlassian',
    stockName: 'Atlassian',
    stockAbbr: 'Atlassian Corp.',
    currentValue: 35000,
    change: 3.2,
  },
];

const StockList = () => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={stockData}
      renderItem={({item}) => (
        <Stock
          iconName={item.iconName}
          stockName={item.stockName}
          currentValue={item.currentValue}
          stockAbbr={item.stockAbbr}
          change={item.change}
        />
      )}
      keyExtractor={item => item.stockAbbr}
    />
  );
};

export default StockList;
