import React, {
    Component,
    Text,
    View,
    TouchableHighlight,
} from 'react-native';

import Container from '../../components/common/container';
import Card from '../../components/common/card'

import styles from './styles';

class NotificationsCreation extends Component {
  render() {
    var { navigator } = this.props;
    var title = 'Add Notifications';
    var leftAction = 'Cancel';
    var rightAction = 'Save';
    return (
      <Container title={title} navigator={navigator} rightAction={rightAction}>
        
      </Container>
    );
  }
}

export default NotificationsCreation;