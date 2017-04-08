import { StyleSheet } from 'react-native';
import {
  cardTitleColor,
  cardSubtitleColor,
  cardContentColor,
  cardHighlightColor,
  jumboFontSize,
  titleFontSize,
  subtitleFontSize,
  contentFontSize,
  titleFont,
  contentFont,
  lineHeight,
  lineSpacing,
  cardMargin,
} from '../../styles/common';

export default StyleSheet.create({
  cardSection: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: cardMargin,
    marginRight: cardMargin,
  },
  cardTitle: {
    color: cardTitleColor,
    fontSize: jumboFontSize,
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
