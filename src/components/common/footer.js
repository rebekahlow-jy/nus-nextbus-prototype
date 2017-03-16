import React, {
    Component,
    View,
    Text,
    TouchableHighlight,
    Image,
} from 'react-native';

import BookmarksView from '../../components/bookmarks-view';
import SearchView from '../../components/search-view';
import MapView from '../../components/map-view';
import DirectoriesView from '../../components/directories-view';
import NotificationsView from '../../components/notifications-view';

import styles from './styles';

export default class Footer extends Component {
  render() {
    var { navigator } = this.props;
    return (
      <View>
        <View style={styles.footer}>
          <View style={styles.footerContent}>
            <TouchableHighlight onPress={() => navigator.push({component: BookmarksView})}>
              <Image style={styles.footerIcon} source={require("../../img/bookmarks-icon-resized.png")} />
            </TouchableHighlight>
            <Text style={styles.footerSubtitle}>Bookmarks</Text>
          </View>
          <View style={styles.footerContent}>
            <TouchableHighlight onPress={() => navigator.push({component: SearchView})}>
              <Image style={styles.footerIcon} source={require("../../img/search-icon-resized.png")} />
            </TouchableHighlight>
            <Text style={styles.footerSubtitle}>Search</Text>
          </View>
          <View style={styles.footerContent}>
            <TouchableHighlight onPress={() => navigator.push({component: MapView})}>
              <Image style={styles.footerIcon} source={require("../../img/map-icon-resized.png")} />
            </TouchableHighlight>
            <Text style={styles.footerSubtitle}>Map</Text>
          </View>
          <View style={styles.footerContent}>
            <TouchableHighlight onPress={() => navigator.push({component: DirectoriesView})}>
              <Image style={styles.footerIcon} source={require("../../img/directories-icon-resized.png")} />
            </TouchableHighlight>
            <Text style={styles.footerSubtitle}>Directories</Text>
          </View>
          <View style={styles.footerContent}>
            <TouchableHighlight onPress={() => navigator.push({component: NotificationsView})}>
              <Image style={styles.footerIcon} source={require("../../img/notifications-icon-resized.png")} />
            </TouchableHighlight>
            <Text style={styles.footerSubtitle}>Notifications</Text>
          </View>
        </View>
        <View style={styles.footerShadow} />
      </View>
    );
  }
}
