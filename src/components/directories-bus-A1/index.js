import React, {
    Component,
    Text,
    View,
    TouchableHighlight,
} from 'react-native';

import Container from '../../components/common/container';
import Card from '../../components/common/card'

import styles from './styles';

class DirectoriesStopView extends Component {
  render() {
    var { navigator } = this.props;
    var title = 'Bus Directory - A1';
    return (
      <Container title={title} navigator={navigator}>
          <Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardSubtitle}>Prince Georges Park</Text>
          </View>
          <View style={styles.cardSection}>
          </View>
          <View style={styles.cardSection}>
            <Text style={styles.cardTitle}>10</Text>
            <Text style={styles.cardSubtitle}>Mins</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardSubtitle}>Kent Ridge MRT</Text>
          </View>
          <View style={styles.cardSection}>
          </View>
          <View style={styles.cardSection}>
            <Text style={styles.cardTitle}>15</Text>
            <Text style={styles.cardSubtitle}>Mins</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardSubtitle}>LT29</Text>
          </View>
          <View style={styles.cardSection}>
          </View>
          <View style={styles.cardSection}>
            <Text style={styles.cardTitle}>1</Text>
            <Text style={styles.cardSubtitle}>Mins</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardSubtitle}>UHall</Text>
          </View>
          <View style={styles.cardSection}>
          </View>
          <View style={styles.cardSection}>
            <Text style={styles.cardTitle}>4</Text>
            <Text style={styles.cardSubtitle}>Mins</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardSubtitle}>Opp University Health Centre</Text>
          </View>
          <View style={styles.cardSection}>
          </View>
          <View style={styles.cardSection}>
            <Text style={styles.cardTitle}>7</Text>
            <Text style={styles.cardSubtitle}>Mins</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardSubtitle}>YIH</Text>
          </View>
          <View style={styles.cardSection}>
          </View>
          <View style={styles.cardSection}>
            <Text style={styles.cardTitle}>9</Text>
            <Text style={styles.cardSubtitle}>Mins</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardSubtitle}>Central Library</Text>
          </View>
          <View style={styles.cardSection}>
          </View>
          <View style={styles.cardSection}>
            <Text style={styles.cardTitle}>11</Text>
            <Text style={styles.cardSubtitle}>Mins</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardSubtitle}>LT13</Text>
          </View>
          <View style={styles.cardSection}>
          </View>
          <View style={styles.cardSection}>
            <Text style={styles.cardTitle}>1</Text>
            <Text style={styles.cardSubtitle}>Mins</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardSubtitle}>AS7</Text>
          </View>
          <View style={styles.cardSection}>
          </View>
          <View style={styles.cardSection}>
            <Text style={styles.cardTitle}>3</Text>
            <Text style={styles.cardSubtitle}>Mins</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardSubtitle}>COM2 (CP13)</Text>
          </View>
          <View style={styles.cardSection}>
          </View>
          <View style={styles.cardSection}>
            <Text style={styles.cardTitle}>6</Text>
            <Text style={styles.cardSubtitle}>Mins</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardSubtitle}>BIZ 2</Text>
          </View>
          <View style={styles.cardSection}>
          </View>
          <View style={styles.cardSection}>
            <Text style={styles.cardTitle}>9</Text>
            <Text style={styles.cardSubtitle}>Mins</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardSubtitle}>PGP House No 12</Text>
          </View>
          <View style={styles.cardSection}>
          </View>
          <View style={styles.cardSection}>
            <Text style={styles.cardTitle}>12</Text>
            <Text style={styles.cardSubtitle}>Mins</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardSubtitle}>PGP House No 7</Text>
          </View>
          <View style={styles.cardSection}>
          </View>
          <View style={styles.cardSection}>
            <Text style={styles.cardTitle}>1</Text>
            <Text style={styles.cardSubtitle}>Mins</Text>
          </View>
        </Card>
      </Container>
    );
  }
}

export default DirectoriesStopView;
