import React, {
    Component,
    Text,
    View,
    TouchableHighlight,
} from 'react-native';

import Container from '../../components/common/container';
import Card from '../../components/common/card'

import styles from './styles';

class DirectoriesView extends Component {
  render() {
    var { navigator } = this.props;
    var title = 'Bus Directory';
    var rightAction = 'View Bus Stops';
    return (
      <Container title={title} navigator={navigator}>
          <Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardTitle}>A1</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardTitle}>A1E</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardTitle}>A2</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardTitle}>A2E</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardTitle}>B1</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardTitle}>B2</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardTitle}>BTC</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardTitle}>C</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardTitle}>D1</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardTitle}>D2</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardTitle}>UT-C</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardTitle}>UT-F</Text>
          </View>
        </Card>
      </Container>
    );
  }
}

export default DirectoriesView;
