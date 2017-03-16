import { StyleSheet } from 'react-native';
import {
  headerBackgroundColor,
  headerShadowColor,
  headerAccentColor,
  headerTitleColor,
  headerAccentTitleColor,
  pageBackgroundColor,
  cardBackgroundColor,
  cardContentColor,
  cardShadowColor,
  footerBackgroundColor,
  footerShadowColor,
  footerTitleColor,
  footerSubtitleColor,
  titleFont,
  titleFontSize,
  subtitleFontSize,
  contentFontSize,
  iconSize,
  headerHeight,
  footerHeight,
  shadowHeight,
  cardHeight,
  pageMargin,
  footerMargin
} from '../../styles/common';

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: headerHeight,
    backgroundColor: headerBackgroundColor,
  },
  headerAction: {
    height: headerHeight,
    width: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: headerAccentColor,
  },
  headerShadow: {
    height: shadowHeight,
    backgroundColor: headerShadowColor,
  },
  headerTitle: {
    marginLeft: pageMargin,
    marginRight: pageMargin,
    color: headerTitleColor,
    fontSize: titleFontSize,
    fontFamily: titleFont,
  },
  headerActionTitle: {
    color: headerAccentTitleColor,
    fontSize: titleFontSize,
    fontFamily: titleFont,
  },
  container: {
    flex: 1,
    backgroundColor: pageBackgroundColor,
  },
  contentContainer: {
    flex: 1,
    margin: pageMargin,
  },
  card: {
    backgroundColor: cardBackgroundColor,
    height: cardHeight,
    margin: pageMargin,
    justifyContent: 'space-between',
  },
  cardContainer: {
    margin: pageMargin,
  },
  cardShadow: {
    backgroundColor: cardShadowColor,
    height: shadowHeight,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: footerHeight,
    backgroundColor: footerBackgroundColor,
  },
  footerContent: {
    alignItems: 'center',
    marginLeft: pageMargin,
    marginRight: pageMargin,
  },
  footerIcon: {
    width: iconSize,
    height: iconSize,
    marginBottom: footerMargin,
  },
  footerSubtitle: {
    color: footerSubtitleColor,
    fontSize: contentFontSize,
    fontFamily: titleFont,
  },
  footerShadow: {
    height: shadowHeight,
    backgroundColor: footerShadowColor,
  },
});
