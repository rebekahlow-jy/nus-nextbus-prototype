import React, {
    Component,
    Text,
    View,
    Image,
    TouchableHighlight,
} from 'react-native';

import Container from '../../components/common/container';
import Card from '../../components/common/card'

import styles from './styles';

class MapView extends Component {
  render() {
    var { navigator } = this.props;
    var title = 'Map';
    return (
      <Container title={title} navigator={navigator} mapNotification={true}>
      </Container>
    );
  }
}

export default MapView;
