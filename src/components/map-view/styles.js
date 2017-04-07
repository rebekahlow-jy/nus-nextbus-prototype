import { StyleSheet } from 'react-native';
import {
  headerHeight,
  cardTitleColor,
  cardSubtitleColor,
  cardContentColor,
  cardBackgroundColor,
  titleFontSize,
  subtitleFontSize,
  contentFontSize,
  titleFont,
  contentFont,
  lineHeight,
  lineSpacing,
  pageMargin,
  footerHeight,
  mapHeight,
  screenWidth,
  screenHeight,
} from '../../styles/common';

export default StyleSheet.create({
  mapNotificationContainer: {
    height: headerHeight,
    backgroundColor: cardBackgroundColor,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: pageMargin,
    paddingRight: pageMargin,
  },
  mapNotificationText: {
    color: cardSubtitleColor,
    fontSize: subtitleFontSize,
    marginBottom: lineSpacing,
    fontFamily: titleFont,
  },
  imageContainer: {
    height: mapHeight,
  },
  mapPinContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapPinTextContainer: {
    flexDirection: 'row',
    backgroundColor: cardBackgroundColor,
    width: 100,
  },
  mapPinText: {
    color: cardSubtitleColor,
    fontSize: contentFontSize,
    fontFamily: titleFont,
    marginTop: lineSpacing,
    marginBottom: lineSpacing,
    marginLeft: lineSpacing,
    marginRight: lineSpacing,
  }
});
