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
    var title = 'Bus Directory - Central Library';
    return (
      <Container title={title} navigator={navigator}>
          <Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardTitle}>A1</Text>
          </View>         
          <View style={styles.cardSection}>
            <Text style={styles.cardSubtitle}>To: PGP Terminal</Text>
            <Text style={styles.cardContent}>Via: C.Lib, COM2</Text>
          </View>
          <View style={styles.cardSection}>
            <Text style={styles.cardTitle}>3</Text>
            <Text style={styles.cardSubtitle}>Mins</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardTitle}>A1E</Text>
          </View>
          <View style={styles.cardSection}>
            <Text style={styles.cardSubtitle}>To: PGP Terminal</Text>
            <Text style={styles.cardContent}>Via: C.Lib, BIZ 2</Text>
          </View>
          <View style={styles.cardSection}>
            <Text style={styles.cardTitle}>-</Text>
            <Text style={styles.cardSubtitle}>Mins</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardTitle}>B1</Text>
          </View>
          <View style={styles.cardSection}>
            <Text style={styles.cardSubtitle}>To: KR Bus Terminal</Text>
            <Text style={styles.cardContent}>Via: UTown</Text>
          </View>
          <View style={styles.cardSection}>
            <Text style={styles.cardTitle}>5</Text>
            <Text style={styles.cardSubtitle}>Mins</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardTitle}>BTC</Text>
          </View>
          <View style={styles.cardSection}>
            <Text style={styles.cardSubtitle}>To: Bukit Timah Campus</Text>
            <Text style={styles.cardContent}>Via: PGP Terminal</Text>
          </View>
          <View style={styles.cardSection}>
            <Text style={styles.cardTitle}>12</Text>
            <Text style={styles.cardSubtitle}>Mins</Text>
          </View>
        </Card>
        <Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardTitle}>D1</Text>
          </View>
          <View style={styles.cardSection}>
            <Text style={styles.cardSubtitle}>To: BIZ2 (CP11)</Text>
            <Text style={styles.cardContent}>Via: UTown (Loop)</Text>
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

export default DirectoriesView;
