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
} from '../../styles/common';

export default StyleSheet.create({
  cardTitle: {
    color: cardTitleColor,
    fontSize: titleFontSize,
    marginBottom: lineSpacing,
    fontFamily: titleFont,
  },
  cardSubtitle: {
    color: cardSubtitleColor,
    fontSize: subtitleFontSize,
    marginBottom: lineSpacing,
    fontFamily: titleFont,
  },
  cardHighlight: {
    backgroundColor: cardHighlightColor,
    padding: lineSpacing,
  },
  cardContent: {
    color: cardContentColor,
    fontSize: contentFontSize,
    lineHeight: lineHeight,
    marginBottom: lineSpacing,
    fontFamily: contentFont,
  }
});
