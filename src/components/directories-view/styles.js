import { StyleSheet } from 'react-native';
import {
  cardTitleColor,
  cardSubtitleColor,
  cardContentColor,
  cardHighlightColor,
  titleFontSize,
  subtitleFontSize,
  contentFontSize,
  titleFont,
  contentFont,
  lineHeight,
  lineSpacing,
  cardMargin,
  jumboFontSize,
  textInputMargin,
  cardBackgroundColor,
  textInputContainerHeight,
  cardShadowColor,
  headerBackgroundColor,
  screenWidth,
} from '../../styles/common';

export default StyleSheet.create({
  tabContainer: {
    backgroundColor: cardBackgroundColor,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerShadow: {
    paddingBottom: textInputMargin * 2,
    backgroundColor: cardShadowColor,
  },
  tabTitle: {
    color: cardSubtitleColor,
    fontSize: subtitleFontSize,
    fontFamily: titleFont,
    marginLeft: 60,
    marginRight: 60,
  },
  tabTitleActive: {
    color: headerBackgroundColor,
    fontSize: subtitleFontSize,
    fontFamily: titleFont,
    marginLeft: 60,
    marginRight: 60,
  },
  cardSection: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: cardMargin,
    marginRight: cardMargin,
  },
  containerSpaceBetween: {
    marginTop: textInputMargin * 2,
    marginBottom: textInputMargin * 2,
  },
  cardTitle: {
    color: cardTitleColor,
    fontSize: jumboFontSize,
    fontFamily: titleFont,
  },
  cardImageTitle: {
    color: cardTitleColor,
    fontSize: subtitleFontSize + 7,
    fontFamily: titleFont,
  },
  cardSubtitle: {
    color: cardSubtitleColor,
    fontSize: subtitleFontSize,
    fontFamily: titleFont,
  },
  cardContent: {
    color: cardContentColor,
    fontSize: contentFontSize,
    lineHeight: lineHeight,
    marginTop: lineSpacing,
    marginBottom: lineSpacing,
    fontFamily: contentFont,
  },
  cardHighlight: {
    backgroundColor: cardHighlightColor,
    padding: lineSpacing,
  },
});
