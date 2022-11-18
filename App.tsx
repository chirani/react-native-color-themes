/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import palettes from './src/Config';
import Header from './src/comps/Header';
import Summary from './src/comps/Summary';
import Actions from './src/comps/Actions';
import StockList from './src/comps/StockList';
import Navbar from './src/comps/Navbar';
const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={palettes().accent} />
      <Header />
      <Summary
        balance={'5,500.08'}
        change={-32}
        changePercentage={3}
        currency="USD"
      />
      <Actions />
      <StockList />
      <Navbar />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: palettes().primary},
});
export default App;
