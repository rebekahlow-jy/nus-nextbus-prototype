import React from 'react-native';
import {
    Component,
    View
} from 'react-native';

import NavigationBar from 'react-native-navbar';

import styles from './styles';

export default class SearchView extends Component {
  render() {
    const leftButtonConfig = {
      title: 'Back',
      handler: () => this.props.navigator.pop(),
    };

    return (
      <View style={styles.background}>
        <NavigationBar
          title={{ title: 'Search', }}
          leftButton={leftButtonConfig}
        />
      </View>
    );
  }
}
