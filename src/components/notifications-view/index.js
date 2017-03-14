import React from 'react-native';
import {
    Component,
    View,
    Text,
} from 'react-native';

import Container from '../../components/common/container'

import styles from './styles';

export default class NotificationsView extends Component {
  render() {
    var { navigator } = this.props;
    return (
      <Container navigator={navigator}>
        <Text>[TITLE: NOTIFICATIONS]</Text>
      </Container>
    );
  }
}
