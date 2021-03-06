import React from 'react-native';
import {
    Component,
    View
} from 'react-native';

import NavigationBar from 'react-native-navbar';

export default class CustomScreen extends Component {
  render() {
    const leftButtonConfig = {
      title: 'Back',
      handler: () => this.props.navigator.pop(),
    };

    return (
      <View>
        <NavigationBar
          title={{ title: 'Custom screen', }}
          leftButton={leftButtonConfig}
        />
      </View>
    );
  }
}
