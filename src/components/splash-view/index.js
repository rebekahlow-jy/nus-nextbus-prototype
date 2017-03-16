import React, {
    Component,
    PropTypes,
    View,
    Image,
    Text,
} from 'react-native';

import BookmarksView from '../../components/bookmarks-view';
import styles from './styles';

class SplashView extends Component {
  componentWillMount() {
    var { navigator } = this.props;
    setTimeout (() => {
      navigator.replace({component: BookmarksView});
    }, 2000);
  }
  render() {
    return (
      <View style={styles.fullScreen}>
        <Image style={styles.image} source={require("../../img/nus-nextbus-icon.png")} />
      </View>
    );
  }
}

export default SplashView;
