import { StyleSheet } from 'react-native';
import {
  cardTitleColor,
  cardSubtitleColor,
  cardContentColor,
  cardBackgroundColor,
  cardShadowColor,
  jumboFontSize,
  titleFontSize,
  subtitleFontSize,
  contentFontSize,
  titleFont,
  contentFont,
  lineHeight,
  cardHeight,
  textInputContainerHeight,
  textInputHeight,
  textLabelHeight,
  textInputLabelWidth,
  textInputWidth,
  lineSpacing,
  pageMargin,
  cardMargin,
  textLabelMargin,
  textInputMargin,
  headerShadowColor,
  headerTitleColor,
  pageBackgroundColor,
} from '../../styles/common';

export default StyleSheet.create({
  searchContainer: {
    backgroundColor: cardBackgroundColor,
    height: textInputContainerHeight + textLabelMargin,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  containerSpaceBetween: {
    marginTop: textInputMargin * 2,
    marginBottom: textInputMargin * 2,
  },
  searchLabel: {
    color: cardTitleColor,
    fontSize: subtitleFontSize,
    fontFamily: titleFont,
    height: textLabelHeight,
    width: textInputLabelWidth,
    marginTop: textLabelMargin,
    marginLeft: pageMargin,
    marginRight: pageMargin,
    marginBottom: textLabelMargin,
  },
  containerShadow: {
    paddingBottom: textInputMargin * 2,
    backgroundColor: cardShadowColor,
  },
  textInput: {
    fontFamily: titleFont,
    fontSize: subtitleFontSize,
    color: cardSubtitleColor,
    height: textInputHeight,
    width: textInputWidth,
    marginTop: textInputMargin,
    marginBottom: textInputMargin,
  },
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
    backgroundColor: cardBackgroundColor,
    padding: lineSpacing,
  },
});
