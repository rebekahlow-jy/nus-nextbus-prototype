import React, {
    Component,
    Text,
    View,
    TouchableHighlight,
} from 'react-native';

import Container from '../../components/common/container';
import Card from '../../components/common/card'

import styles from './styles';

class BookmarksView extends Component {
  render() {
    var { navigator } = this.props;
    var title = 'Bookmarks';
    return (
      <Container title={title} navigator={navigator}>
        <Card>
          <Text style={styles.cardTitle}>Title <Text style={styles.cardSubtitle}>Subtitle</Text></Text>
          <View style={styles.cardHighlight}>
            <Text style={styles.cardContent}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua.
            </Text>
          </View>
        </Card>
        <Card>
          <Text style={styles.cardTitle}>Title <Text style={styles.cardSubtitle}>Subtitle</Text></Text>
          <View style={styles.cardHighlight}>
            <Text style={styles.cardContent}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua.
            </Text>
          </View>
        </Card>
      </Container>
    );
  }
}

export default BookmarksView;
