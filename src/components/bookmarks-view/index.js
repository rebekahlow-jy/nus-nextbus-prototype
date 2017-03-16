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
          <View style={styles.cardSection}>
            <Text style={styles.cardTitle}>A1</Text>
          </View>
          <View style={styles.cardSection}>
            <Text style={styles.cardSubtitle}>Central Library</Text>
            <Text style={styles.cardContent}>KR MRT > Central Library > PGP Terminal</Text>
          </View>
          <View style={styles.cardSection}>
            <Text style={styles.cardTitle}>3</Text>
            <Text style={styles.cardSubtitle}>Mins</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardTitle}>D1</Text>
          </View>
          <View style={styles.cardSection}>
            <Text style={styles.cardSubtitle}>COM2</Text>
            <Text style={styles.cardContent}>University Town > Central Library > BIZ2</Text>
          </View>
          <View style={styles.cardSection}>
            <Text style={styles.cardTitle}>7</Text>
            <Text style={styles.cardSubtitle}>Mins</Text>
          </View>
        </Card>
      </Container>
    );
  }
}

export default BookmarksView;
