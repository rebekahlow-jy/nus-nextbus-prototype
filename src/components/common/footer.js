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
import { footerFocusColor } from '../../styles/common';

export default class Footer extends Component {
  render() {
    var { navigator } = this.props;
    return (
      <View>
        <View style={styles.footer}>
          <TouchableHighlight underlayColor={footerFocusColor} onPress={() => navigator.push({component: BookmarksView})}>
            <View style={styles.footerContent}>
              <Image style={styles.footerIcon} source={require("../../img/bookmarks-icon-resized.png")} />
              <Text style={styles.footerSubtitle}>Bookmarks</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor={footerFocusColor} onPress={() => navigator.push({component: SearchView})}>
            <View style={styles.footerContent}>
              <Image style={styles.footerIcon} source={require("../../img/search-icon-resized.png")} />
              <Text style={styles.footerSubtitle}>Search</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor={footerFocusColor} onPress={() => navigator.push({component: MapView})}>
            <View style={styles.footerContent}>
              <Image style={styles.footerIcon} source={require("../../img/map-icon-resized.png")} />
              <Text style={styles.footerSubtitle}>Map</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor={footerFocusColor} onPress={() => navigator.push({component: DirectoriesView})}>
            <View style={styles.footerContent}>
              <Image style={styles.footerIcon} source={require("../../img/directories-icon-resized.png")} />
              <Text style={styles.footerSubtitle}>Directories</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor={footerFocusColor} onPress={() => navigator.push({component: NotificationsView})}>
            <View style={styles.footerContent}>
              <Image style={styles.footerIcon} source={require("../../img/notifications-icon-resized.png")} />
              <Text style={styles.footerSubtitle}>Notifications</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.footerShadow} />
      </View>
    );
  }
}
