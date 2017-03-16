import React, {
    Component,
    View,
} from 'react-native';

import Header from './header';
import Footer from './footer';

import styles from './styles';

export default class Container extends Component {
  render() {
    var { title, leftAction, rightAction } = this.props;
    var { navigator } = this.props;
    return (
      <View style={styles.container}>
        <Header
          title={title}
          leftAction={leftAction}
          rightAction={rightAction}
        />
        <View style={styles.contentContainer}>{this.props.children}</View>
        <Footer navigator={navigator} />
      </View>
    );
  }
}
