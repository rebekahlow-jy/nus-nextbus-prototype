import React, {
    Component,
    PropTypes,
    Text,
    View,
    TouchableHighlight,
} from 'react-native';

import BookmarksView from '../../components/bookmarks-view';
import SearchView from '../../components/search-view';
import MapView from '../../components/map-view';
import DirectoriesView from '../../components/directories-view';
import NotificationsView from '../../components/notifications-view';

import styles from './styles';

export default class Container extends Component {
  render() {
    var { navigator } = this.props;
    return (
      <View style={styles.container}>
        {this.props.children}
        <View style={styles.footer}>
          <TouchableHighlight onPress={() => navigator.push({component: BookmarksView})}>
            <Text>Bookmarks</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => navigator.push({component: SearchView})}>
            <Text>Search</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => navigator.push({component: MapView})}>
            <Text>Map</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => navigator.push({component: DirectoriesView})}>
            <Text>Directories</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => navigator.push({component: NotificationsView})}>
            <Text>Notifications</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
