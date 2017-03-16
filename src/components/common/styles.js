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
  },
  headerActionTitle: {
    color: headerAccentTitleColor,
    fontSize: titleFontSize,
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
  },
  footerSubtitle: {
    color: footerSubtitleColor,
    fontSize: contentFontSize,
  },
  footerShadow: {
    height: shadowHeight,
    backgroundColor: footerShadowColor,
  },
});
