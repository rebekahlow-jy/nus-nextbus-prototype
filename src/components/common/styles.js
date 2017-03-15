import { StyleSheet } from 'react-native';
import {
  pageBackgroundColor,
  footerBackgroundColor,
  footerTitleColor,
} from '../../styles/common';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: pageBackgroundColor,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    backgroundColor: footerBackgroundColor,
    color: footerTitleColor,
  }
});
