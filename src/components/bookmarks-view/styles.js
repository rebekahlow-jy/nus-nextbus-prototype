import { StyleSheet } from 'react-native';
import {
  primaryColor,
  primaryFontColor,
  primaryFontFamily,
  mediumFontSize,
} from '../../styles/common';

export default StyleSheet.create({
  // background: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: primaryColor,
  // },
  text: {
    color: primaryFontColor,
    fontFamily: primaryFontFamily,
    fontSize: mediumFontSize,
  }
});
