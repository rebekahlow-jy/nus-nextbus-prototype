import React, {
    Component,
    Text,
    View,
    Image,
    TouchableHighlight,
} from 'react-native';

import Container from '../../components/common/container';
import Card from '../../components/common/card';

import BookmarksView from '../../components/bookmarks-view';

import styles from './styles';

class DirectoriesView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showByBuses: true,
      showByStops: false,
      isA1Bookmarked: false,
      isD1Bookmarked: false,
      openA1StopSelector: false,
      openD1StopSelector: false,
    };
  }

  render() {
    var { navigator } = this.props;
    var title = 'Directories';
    var cardBackgroundColor = '#fcfcfb';
    return (
      <Container title={title} navigator={navigator}>
        <View style={styles.tabContainer}>
          <TouchableHighlight underlayColor={cardBackgroundColor} onPress={() => { this.setState({ showByBuses: true, showByStops: false });}}>
            <View>
              <Text style={this.state.showByBuses == true ? styles.tabTitleActive : styles.tabTitle}>Buses</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor={cardBackgroundColor} onPress={() => { this.setState({ showByBuses: false, showByStops: true });}}>
            <View>
              <Text style={this.state.showByStops == true ? styles.tabTitleActive : styles.tabTitle}>Bus Stops</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.containerShadow} />
        <View style={styles.containerSpaceBetween} />
        {
          this.state.showByBuses == true ?
            <View>
              <Card>
                <View style={styles.cardSection}>
                  <Text style={styles.cardTitle}>A1</Text>
                </View>
                <View style={styles.cardSection}>
                  <TouchableHighlight underlayColor={cardBackgroundColor} onPress={() => { this.setState({ openA1StopSelector: true});}}>
                    {
                      this.state.openA1StopSelector == true ?
                       <Text style={styles.cardSubtitle}>Central Library</Text>
                      : <Text style={styles.cardSubtitle}>[Select Bus Stop]</Text>
                    }
                  </TouchableHighlight>
                  <Text style={styles.cardContent}>KR MRT > Central Library > PGP Terminal</Text>
                </View>
                {
                  this.state.isA1Bookmarked == true ?
                    <TouchableHighlight underlayColor={cardBackgroundColor} onPress={() => { this.setState({ isA1Bookmarked: false});}}>
                      <View style={styles.cardSection}>
                        <Image source={require("../../img/directories-bookmark-icon-added.png")} />
                        <Text style={styles.cardSubtitle}> - </Text>
                      </View>
                    </TouchableHighlight>
                  : <TouchableHighlight underlayColor={cardBackgroundColor} onPress={() => { this.setState({ isA1Bookmarked: true});}}>
                    <View style={styles.cardSection}>
                      <Image source={require("../../img/directories-bookmark-icon.png")} />
                      <Text style={styles.cardSubtitle}> + </Text>
                    </View>
                  </TouchableHighlight>
                }
              </Card>
              <Card>
                <View style={styles.cardSection}>
                  <Text style={styles.cardTitle}>D1</Text>
                </View>
                <View style={styles.cardSection}>
                  <Text style={styles.cardSubtitle}>[Select Bus Stop]</Text>
                  <Text style={styles.cardContent}>University Town > Central Library > BIZ2</Text>
                </View>
                {
                  this.state.isD1Bookmarked == true ?
                    <TouchableHighlight underlayColor={cardBackgroundColor} onPress={() => { this.setState({ isD1Bookmarked: false});}}>
                      <View style={styles.cardSection}>
                        <Image source={require("../../img/directories-bookmark-icon-added.png")} />
                        <Text style={styles.cardSubtitle}> - </Text>
                      </View>
                    </TouchableHighlight>
                  : <TouchableHighlight underlayColor={cardBackgroundColor} onPress={() => { this.setState({ isD1Bookmarked: true});}}>
                    <View style={styles.cardSection}>
                      <Image source={require("../../img/directories-bookmark-icon.png")} />
                      <Text style={styles.cardSubtitle}> + </Text>
                    </View>
                  </TouchableHighlight>
                }
              </Card>
            </View>
          : <Card>
              <View>
                <Text style={styles.cardTitle}>Bus Stops</Text>
              </View>
            </Card>
        }
      </Container>
    );
  }
}

export default DirectoriesView;
