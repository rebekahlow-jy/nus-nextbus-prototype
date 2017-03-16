import { StyleSheet } from 'react-native';
import {
  headerBackgroundColor,
  splashImageSize,
} from '../../styles/common';

export default StyleSheet.create({
  fullScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: headerBackgroundColor,
  },
  image: {
    height: splashImageSize,
    width: splashImageSize,
  }
});
