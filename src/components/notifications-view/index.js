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
          <Text style={styles.cardTitle}>Title</Text>
        </Card>
      </Container>
    );
  }
}

export default NotificationsView;
