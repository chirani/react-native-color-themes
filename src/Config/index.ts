import {MMKVLoader} from 'react-native-mmkv-storage';
import {NativeModules} from 'react-native';

export const MMKV = new MMKVLoader().initialize();
//let string: string = MMKV.getString('color-theme') ?? 'main';
export const setColorTheme = () => {
  const colors = ['pistachio', 'main', 'red'];
  let currentValue = MMKV.getString('color-theme') ?? 'main';
  let indexTheme = colors.indexOf(currentValue);
  indexTheme = indexTheme === colors.length - 1 ? 0 : indexTheme + 1;
  MMKV.setString('color-theme', colors[indexTheme]);
  NativeModules.DevSettings.reload();
};

const main = {
  primary: '#0d120e',
  accent: '#1da756',
  secondary: '#232826',
  tertiary: '#3c413f',
  textPrimary: '#ccc',
  textSecondary: '#666',
};
const red = {
  primary: '#e9eff2',
  accent: '#f4694d',
  secondary: '#f9fbfc',
  tertiary: '#e9eff2',
  textPrimary: '#1a212f',
  textSecondary: '#666',
};
const pistachio = {
  primary: '#f7f6f0',
  accent: '#93C572',
  secondary: '#fff',
  tertiary: '#f7f6f0',
  textPrimary: '#24282c',
  textSecondary: '#666',
};

const themes = {
  red: red,
  main: main,
  pistachio: pistachio,
};

function palettes() {
  let test = MMKV.getString('color-theme') ?? '';
  return themes[test];
}
const padding = (multiplier: number): number => multiplier * 8;
const margin = (multiplier: number): number => multiplier * 8;

export {margin, padding};
export default palettes;
//https://stackoverflow.com/questions/70925754/async-storage-to-store-theme-in-react-native
