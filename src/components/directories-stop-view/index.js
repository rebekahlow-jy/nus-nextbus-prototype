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
    var title = 'Bus Stop Directory';
    var leftAction = 'View Buses';
    return (
      <Container title={title} navigator={navigator}>
          <Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardSubtitle}>AS7</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardSubtitle}>BIZ 2</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardSubtitle}>Block EA</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardSubtitle}>Botanic Gardens MRT</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardSubtitle}>BTC - Oei Tiong Ham Building</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardSubtitle}>Central Library</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardSubtitle}>College Green Hostel</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardSubtitle}>COM2 (CP13)</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardSubtitle}>Computer Centre</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardSubtitle}>Kent Ridge Bus Terminal</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardSubtitle}>Kent Ridge MRT</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardSubtitle}>Kent Vale</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardSubtitle}>LT13</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardSubtitle}>LT29</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardSubtitle}>Museum</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardSubtitle}>Opp Block EA</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardSubtitle}>Opp HSSML</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardSubtitle}>Opp Kent Ridge MRT</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardSubtitle}>Opp NUSS</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardSubtitle}>Opp PGP House No 12</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardSubtitle}>Opp UHall</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardSubtitle}>Opp University Health Centre</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardSubtitle}>Opp YIH</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardSubtitle}>PGP House No 12</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardSubtitle}>PGP House No 14 and No 15</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardSubtitle}>PGP House No 7</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardSubtitle}>PGPR</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardSubtitle}>Prince Georges Park</Text>
          </View>
        </Card>
        Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardSubtitle}>Raffles Hall</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardSubtitle}>S17</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardSubtitle}>UHall</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardSubtitle}>University Health Centre</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardSubtitle}>University Town</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardSubtitle}>Ventus (Opp LT13)</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardSubtitle}>YIH</Text>
          </View>
        </Card>
      </Container>
    );
  }
}

export default DirectoriesStopView;
