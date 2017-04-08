import React, {
    Component,
    Text,
    View,
    TouchableHighlight,
    ToastAndroid,
} from 'react-native';

import Container from '../../components/common/container';
import Card from '../../components/common/card'

import styles from './styles';

class BookmarksView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isA1Bookmarked: true,
      isD1Bookmarked: true,
    };
  }

  render() {
    var { navigator } = this.props;
    var title = 'Bookmarks';
    var cardBackgroundColor = '#fcfcfb';
    return (
      <Container title={title} navigator={navigator}>
        {
          this.state.isA1Bookmarked == true ?
            <Card>
              <View style={styles.cardSection}>
                <Text style={styles.cardTitle}>A1</Text>
              </View>
              <View style={styles.cardSection}>
                <Text style={styles.cardSubtitle}>Central Library</Text>
                <Text style={styles.cardContent}>KR MRT > Central Library > PGP Terminal</Text>
              </View>
              <TouchableHighlight
                underlayColor={cardBackgroundColor}
                onPress={() => {
                  this.setState({ isA1Bookmarked: !this.state.isA1Bookmarked});
                  this.state.isA1Bookmarked == true ? ToastAndroid.show('Added to Bookmarks', ToastAndroid.SHORT) : ToastAndroid.show('Removed from Bookmarks', ToastAndroid.SHORT);
                }}
              >
                <View style={styles.cardSection}>
                  <Text style={this.state.isA1Bookmarked == true ? styles.cardTitleActive : styles.cardTitle}>7</Text>
                  <Text style={this.state.isA1Bookmarked == true ? styles.cardSubtitleActive : styles.cardSubtitle}>Mins</Text>
                </View>
              </TouchableHighlight>
            </Card>
          : null
        }
        {
          this.state.isD1Bookmarked == true ?
            <Card>
              <View style={styles.cardSection}>
                <Text style={styles.cardTitle}>D1</Text>
              </View>
              <View style={styles.cardSection}>
                <Text style={styles.cardSubtitle}>COM2</Text>
                <Text style={styles.cardContent}>University Town > Central Library > BIZ2</Text>
              </View>
              <TouchableHighlight
                underlayColor={cardBackgroundColor}
                onPress={() => {
                  this.setState({ isD1Bookmarked: !this.state.isD1Bookmarked});
                  this.state.isD1Bookmarked == true ? ToastAndroid.show('Added to Bookmarks', ToastAndroid.SHORT) : ToastAndroid.show('Removed from Bookmarks', ToastAndroid.SHORT);
                }}
              >
                <View style={styles.cardSection}>
                  <Text style={this.state.isD1Bookmarked == true ? styles.cardTitleActive : styles.cardTitle}>5</Text>
                  <Text style={this.state.isD1Bookmarked == true ? styles.cardSubtitleActive : styles.cardSubtitle}>Mins</Text>
                </View>
              </TouchableHighlight>
            </Card>
          : null
        }
      </Container>
    );
  }
}

export default BookmarksView;
