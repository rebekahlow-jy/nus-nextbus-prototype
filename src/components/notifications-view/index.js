import React, {
    Component,
    Text,
    View,
    TouchableHighlight,
} from 'react-native';

import Container from '../../components/common/container';
import Card from '../../components/common/card'

import styles from './styles';

class NotificationsView extends Component {
  render() {
    var { navigator } = this.props;
    var title = 'Notifications';
    return (
      <Container title={title} navigator={navigator}>
        <Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardTitle}>A1</Text>
          </View>
          <View style={styles.cardSection}>
            <Text style={styles.cardSubtitle}>Central Library</Text>
            <Text style={styles.cardContent}>15:00-15.30 Wednesday, Thursday</Text>
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
            <Text style={styles.cardContent}>18:00-18.30 Friday</Text>
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

export default NotificationsView;
