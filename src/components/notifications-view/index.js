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
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    var { navigator } = this.props;
    var title = 'Notifications';
    var rightAction = '+';
    var actionBackgroundColor = '#f25c34';
    return (
      <Container title={title} navigator={navigator} rightAction={rightAction}>
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
      </Container>
    );
  }
}

export default NotificationsView;
