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
    var rightAction = '+';
    return (
      <Container title={title} navigator={navigator} rightAction={rightAction}>
        <Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardTitle}>A1</Text>
          </View>
          <View style={styles.cardSection}>
            <Text style={styles.cardSubtitle}>Central Library</Text>
            <Text style={styles.cardContent}>06:00 Wed, Thur</Text>
          </View>
          <View style={styles.cardSection}>
            <TouchableHighlight onPress={() => console.log('I CHANGED')}>
              <View>
                <Text>ON</Text>
              </View>
            </TouchableHighlight>
          </View>
        </Card>
      </Container>
    );
  }
}

export default NotificationsView;
