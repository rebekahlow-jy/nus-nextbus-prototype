import React, {
    Component,
    View,
} from 'react-native';

import Header from './header';
import Footer from './footer';
import Map from '../../components/map-view/map';

import styles from './styles';

export default class Container extends Component {
  render() {
    var { title, leftAction, rightAction, mapNotification } = this.props;
    var { navigator } = this.props;
    return (
      <View style={styles.container}>
        <Header
          title={title}
          leftAction={leftAction}
          rightAction={rightAction}
        />
        {
          mapNotification == true ?
          <Map />
          : <View></View>
        }
        <View style={styles.contentContainer}>{this.props.children}</View>
        <Footer navigator={navigator} />
      </View>
    );
  }
}
