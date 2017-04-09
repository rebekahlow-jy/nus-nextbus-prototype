import React, {
    Component,
    Text,
    View,
    TouchableHighlight,
    ToastAndroid,
    Modal,
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
      isA1StopModalVisible: false,
      isD1StopModalVisible: false,
      hasA1StopSelected: false,
      hasD1StopSelected: false,
      A1StopName: '',
      D1StopName: '',

      isCLBBookmarked: false,
      isUTownBookmarked: false,
      isCLBBusModalVisible: false,
      isUTownBusModalVisible: false,
      hasCLBBusSelected: false,
      hasUTownBusSelected: false,
      CLBBusName: 'A1',
      UTownBusName: '',
    };
  }

  setA1ModalVisible(isA1StopModalVisible) {
    this.setState({isA1StopModalVisible: isA1StopModalVisible});
  }

  setD1ModalVisible(isD1StopModalVisible) {
    this.setState({isD1StopModalVisible: isD1StopModalVisible});
  }

  setCLBModalVisible(isCLBBusModalVisible) {
    this.setState({isCLBBusModalVisible: isCLBBusModalVisible});
  }

  setUTownModalVisible(isUTownBusModalVisible) {
    this.setState({isUTownBusModalVisible: isUTownBusModalVisible});
  }

  render() {
    var { navigator } = this.props;
    var title = 'Directories';
    var cardBackgroundColor = '#fcfcfb';
    var modalBackgroundColor = 'rgba(52, 52, 52, 0)';
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
        {
          this.state.showByBuses == true ?
            <View>
              <Card>
                <View style={styles.cardSection}>
                  <Text style={styles.cardTitle}>A1</Text>
                </View>
                <View style={styles.cardSection}>
                  <TouchableHighlight underlayColor={cardBackgroundColor} onPress={() => { this.setA1ModalVisible(true);}}>
                    {
                      this.state.hasA1StopSelected == true ?
                       <Text style={styles.cardSubtitle}>{this.state.A1StopName}</Text>
                      : <Text style={styles.cardSubtitle}>[Select Bus Stop]</Text>
                    }
                  </TouchableHighlight>
                  <Text style={styles.cardContent}>KR MRT > Central Library > PGP Terminal</Text>
                </View>
                <Modal
                  animationType={"slide"}
                  transparent={false}
                  visible={this.state.isA1StopModalVisible}
                  onRequestClose={() => {this.setA1ModalVisible(false);
                }}>
                  <View style={styles.modalContainer}>
                    <View style={styles.modalBackgroundContainer}>
                      <TouchableHighlight
                        underlayColor={modalBackgroundColor}
                        onPress={() => {
                          this.setA1ModalVisible(!this.state.isA1StopModalVisible);
                      }}>
                        <Text style={styles.closeButton}> X </Text>
                      </TouchableHighlight>
                      <Text style={styles.modalTitle}>Select Bus Stop</Text>
                      <TouchableHighlight
                        underlayColor={modalBackgroundColor}
                        onPress={() => {
                          this.setState({ hasA1StopSelected: true, A1StopName: 'KR MRT'});
                          this.setA1ModalVisible(!this.state.isA1StopModalVisible);
                      }}>
                        <Text style={styles.modalContent}>KR MRT</Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        underlayColor={modalBackgroundColor}
                        onPress={() => {
                          this.setState({ hasA1StopSelected: true, A1StopName: 'LT29'});
                          this.setA1ModalVisible(!this.state.isA1StopModalVisible);
                      }}>
                        <Text style={styles.modalContent}>LT29</Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        underlayColor={modalBackgroundColor}
                        onPress={() => {
                          this.setState({ hasA1StopSelected: true, A1StopName: 'University Hall'});
                          this.setA1ModalVisible(!this.state.isA1StopModalVisible);
                      }}>
                        <Text style={styles.modalContent}>University Hall</Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        underlayColor={modalBackgroundColor}
                        onPress={() => {
                          this.setState({ hasA1StopSelected: true, A1StopName: 'Central Library'});
                          this.setA1ModalVisible(!this.state.isA1StopModalVisible);
                      }}>
                        <Text style={styles.modalContent}>Central Library</Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        underlayColor={modalBackgroundColor}
                        onPress={() => {
                          this.setState({ hasA1StopSelected: true, A1StopName: 'COM2'});
                          this.setA1ModalVisible(!this.state.isA1StopModalVisible);
                      }}>
                        <Text style={styles.modalContent}>COM2</Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        underlayColor={modalBackgroundColor}
                        onPress={() => {
                          this.setState({ hasA1StopSelected: true, A1StopName: 'PGP Terminal'});
                          this.setA1ModalVisible(!this.state.isA1StopModalVisible);
                      }}>
                        <Text style={styles.modalContent}>PGP Terminal</Text>
                      </TouchableHighlight>
                    </View>
                  </View>
                </Modal>
                {
                  this.state.hasA1StopSelected == true ?
                    <TouchableHighlight
                      underlayColor={cardBackgroundColor}
                      onPress={() => {
                        this.setState({ isA1Bookmarked: !this.state.isA1Bookmarked});
                        this.state.isA1Bookmarked == true ? ToastAndroid.show('Added to Bookmarks', ToastAndroid.SHORT) : ToastAndroid.show('Removed from Bookmarks', ToastAndroid.SHORT);
                      }}
                    >
                      <View style={styles.cardSection}>
                        <Text style={this.state.isA1Bookmarked == true ? styles.cardTitleActive : styles.cardTitle}>9</Text>
                        <Text style={this.state.isA1Bookmarked == true ? styles.cardSubtitleActive : styles.cardSubtitle}>Mins</Text>
                      </View>
                    </TouchableHighlight>
                  : <View style={styles.cardSection}>
                      <Text style={styles.cardTitleHidden}>9</Text>
                      <Text style={styles.cardSubtitleHidden}>Mins</Text>
                    </View>
                }
              </Card>
              <Card>
                <View style={styles.cardSection}>
                  <Text style={styles.cardTitle}>D1</Text>
                </View>
                <View style={styles.cardSection}>
                  <TouchableHighlight underlayColor={cardBackgroundColor} onPress={() => { this.setD1ModalVisible(true);}}>
                    {
                      this.state.hasD1StopSelected == true ?
                       <Text style={styles.cardSubtitle}>{this.state.D1StopName}</Text>
                      : <Text style={styles.cardSubtitle}>[Select Bus Stop]</Text>
                    }
                  </TouchableHighlight>
                  <Text style={styles.cardContent}>University Town > Central Library > BIZ2</Text>
                </View>
                <Modal
                  animationType={"slide"}
                  transparent={false}
                  visible={this.state.isD1StopModalVisible}
                  onRequestClose={() => {this.setD1ModalVisible(false);
                }}>
                  <View style={styles.modalContainer}>
                    <View style={styles.modalBackgroundContainer}>
                      <TouchableHighlight
                        underlayColor={modalBackgroundColor}
                        onPress={() => {
                          this.setD1ModalVisible(!this.state.isD1StopModalVisible);
                      }}>
                        <Text style={styles.closeButton}> X </Text>
                      </TouchableHighlight>
                      <Text style={styles.modalTitle}>Select Bus Stop</Text>
                      <TouchableHighlight
                        underlayColor={modalBackgroundColor}
                        onPress={() => {
                          this.setState({ hasD1StopSelected: true, D1StopName: 'University Town'});
                          this.setD1ModalVisible(!this.state.isD1StopModalVisible);
                      }}>
                        <Text style={styles.modalContent}>University Town</Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        underlayColor={modalBackgroundColor}
                        onPress={() => {
                          this.setState({ hasD1StopSelected: true, D1StopName: 'Museum'});
                          this.setD1ModalVisible(!this.state.isD1StopModalVisible);
                      }}>
                        <Text style={styles.modalContent}>Museum</Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        underlayColor={modalBackgroundColor}
                        onPress={() => {
                          this.setState({ hasD1StopSelected: true, D1StopName: 'Yusof Ishak House'});
                          this.setD1ModalVisible(!this.state.isD1StopModalVisible);
                      }}>
                        <Text style={styles.modalContent}>Yusof Ishak House</Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        underlayColor={modalBackgroundColor}
                        onPress={() => {
                          this.setState({ hasD1StopSelected: true, D1StopName: 'Central Library'});
                          this.setD1ModalVisible(!this.state.isD1StopModalVisible);
                      }}>
                        <Text style={styles.modalContent}>Central Library</Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        underlayColor={modalBackgroundColor}
                        onPress={() => {
                          this.setState({ hasD1StopSelected: true, D1StopName: 'COM2'});
                          this.setD1ModalVisible(!this.state.isD1StopModalVisible);
                      }}>
                        <Text style={styles.modalContent}>COM2</Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        underlayColor={modalBackgroundColor}
                        onPress={() => {
                          this.setState({ hasD1StopSelected: true, D1StopName: 'BIZ2'});
                          this.setD1ModalVisible(!this.state.isD1StopModalVisible);
                      }}>
                        <Text style={styles.modalContent}>BIZ2</Text>
                      </TouchableHighlight>
                    </View>
                  </View>
                </Modal>
                {
                  this.state.hasD1StopSelected == true ?
                    <TouchableHighlight
                      underlayColor={cardBackgroundColor}
                      onPress={() => {
                        this.setState({ isD1Bookmarked: !this.state.isD1Bookmarked});
                        this.state.isD1Bookmarked == true ? ToastAndroid.show('Added to Bookmarks', ToastAndroid.SHORT) : ToastAndroid.show('Removed from Bookmarks', ToastAndroid.SHORT);
                      }}
                    >
                      <View style={styles.cardSection}>
                        <Text style={this.state.isD1Bookmarked == true ? styles.cardTitleActive : styles.cardTitle}>5</Text>
                        <Text style={this.state.isD1Bookmarked == true ? styles.cardSubtitleActive : styles.cardSubtitle}>Mins</Text>
                      </View>
                    </TouchableHighlight>
                  : <View style={styles.cardSection}>
                      <Text style={styles.cardTitleHidden}>5</Text>
                      <Text style={styles.cardSubtitleHidden}>Mins</Text>
                    </View>
                }
              </Card>
            </View>
          : <View>
            <Card>
              <View style={styles.cardSection}>
                <TouchableHighlight underlayColor={cardBackgroundColor} onPress={() => { this.setCLBModalVisible(true);}}>
                  {
                    this.state.hasCLBBusSelected == true ?
                     <Text style={styles.cardTitle}>{this.state.CLBBusName}</Text>
                    : <View>
                      <Text style={styles.cardSubtitleDark}>[Select</Text>
                      <Text style={styles.cardSubtitleDark}>  Bus]</Text>
                    </View>
                  }
                </TouchableHighlight>
              </View>
              <Modal
                animationType={"slide"}
                transparent={false}
                visible={this.state.isCLBBusModalVisible}
                onRequestClose={() => {this.setCLBModalVisible(false);
              }}>
                <View style={styles.modalContainer}>
                  <View style={styles.modalBackgroundContainer}>
                    <TouchableHighlight
                      underlayColor={modalBackgroundColor}
                      onPress={() => {
                        this.setCLBModalVisible(!this.state.isCLBBusModalVisible);
                    }}>
                      <Text style={styles.closeButton}> X </Text>
                    </TouchableHighlight>
                    <Text style={styles.modalTitle}>Select Bus</Text>
                    <TouchableHighlight
                      underlayColor={modalBackgroundColor}
                      onPress={() => {
                        this.setState({ hasCLBBusSelected: true, CLBBusName: 'A1'});
                        this.setCLBModalVisible(!this.state.isCLBBusModalVisible);
                    }}>
                      <Text style={styles.modalContent}>A1</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                      underlayColor={modalBackgroundColor}
                      onPress={() => {
                        this.setState({ hasCLBBusSelected: true, CLBBusName: 'D1'});
                        this.setCLBModalVisible(!this.state.isCLBBusModalVisible);
                    }}>
                      <Text style={styles.modalContent}>D1</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                      underlayColor={modalBackgroundColor}
                      onPress={() => {
                        this.setState({ hasCLBBusSelected: true, CLBBusName: 'B1'});
                        this.setCLBModalVisible(!this.state.isCLBBusModalVisible);
                    }}>
                      <Text style={styles.modalContent}>B1</Text>
                    </TouchableHighlight>
                  </View>
                </View>
              </Modal>
              <View style={styles.cardSection}>
                <Text style={styles.cardSubtitle}>Central Library</Text>
                {
                  this.state.hasCLBBusSelected == true ?
                  <Text style={styles.cardContent}>KR MRT > Central Library > PGP Terminal</Text>
                  : null
                }
              </View>
              {
                this.state.hasCLBBusSelected == true ?
                  <TouchableHighlight
                    underlayColor={cardBackgroundColor}
                    onPress={() => {
                      this.setState({ isCLBBookmarked: !this.state.isCLBBookmarked});
                      this.state.isCLBBookmarked == true ? ToastAndroid.show('Added to Bookmarks', ToastAndroid.SHORT) : ToastAndroid.show('Removed from Bookmarks', ToastAndroid.SHORT);
                    }}
                  >
                    <View style={styles.cardSection}>
                      <Text style={this.state.isCLBBookmarked == true ? styles.cardTitleActive : styles.cardTitle}>5</Text>
                      <Text style={this.state.isCLBBookmarked == true ? styles.cardSubtitleActive : styles.cardSubtitle}>Mins</Text>
                    </View>
                  </TouchableHighlight>
                : <View style={styles.cardSection}>
                    <Text style={styles.cardTitleHidden}>5</Text>
                    <Text style={styles.cardSubtitleHidden}>Mins</Text>
                  </View>
              }
            </Card>
            <Card>
              <View style={styles.cardSection}>
                <TouchableHighlight underlayColor={cardBackgroundColor} onPress={() => { this.setUTownModalVisible(true);}}>
                  {
                    this.state.hasUTownBusSelected == true ?
                     <Text style={styles.cardTitle}>{this.state.UTownBusName}</Text>
                    : <View>
                      <Text style={styles.cardSubtitleDark}>[Select</Text>
                      <Text style={styles.cardSubtitleDark}>  Bus]</Text>
                    </View>
                  }
                </TouchableHighlight>
              </View>
              <Modal
                animationType={"slide"}
                transparent={false}
                visible={this.state.isUTownBusModalVisible}
                onRequestClose={() => {this.setUTownModalVisible(false);
              }}>
                <View style={styles.modalContainer}>
                  <View style={styles.modalBackgroundContainer}>
                    <TouchableHighlight
                      underlayColor={modalBackgroundColor}
                      onPress={() => {
                        this.setUTownModalVisible(!this.state.isUTownBusModalVisible);
                    }}>
                      <Text style={styles.closeButton}> X </Text>
                    </TouchableHighlight>
                    <Text style={styles.modalTitle}>Select Bus</Text>
                    <TouchableHighlight
                      underlayColor={modalBackgroundColor}
                      onPress={() => {
                        this.setState({ hasUTownBusSelected: true, UTownBusName: 'D1'});
                        this.setUTownModalVisible(!this.state.isUTownBusModalVisible);
                    }}>
                      <Text style={styles.modalContent}>D1</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                      underlayColor={modalBackgroundColor}
                      onPress={() => {
                        this.setState({ hasUTownBusSelected: true, UTownBusName: 'D2'});
                        this.setUTownModalVisible(!this.state.isUTownBusModalVisible);
                    }}>
                      <Text style={styles.modalContent}>D2</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                      underlayColor={modalBackgroundColor}
                      onPress={() => {
                        this.setState({ hasUTownBusSelected: true, UTownBusName: 'B1'});
                        this.setUTownModalVisible(!this.state.isUTownBusModalVisible);
                    }}>
                      <Text style={styles.modalContent}>B1</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                      underlayColor={modalBackgroundColor}
                      onPress={() => {
                        this.setState({ hasUTownBusSelected: true, UTownBusName: 'B2'});
                        this.setUTownModalVisible(!this.state.isUTownBusModalVisible);
                    }}>
                      <Text style={styles.modalContent}>B2</Text>
                    </TouchableHighlight>
                  </View>
                </View>
              </Modal>
              <View style={styles.cardSection}>
                <Text style={styles.cardSubtitle}>University Town</Text>
                {
                  this.state.hasUTownBusSelected == true ?
                  <Text style={styles.cardContent}>University Town > Central Library > BIZ2</Text>
                  : null
                }
              </View>
              {
                this.state.hasUTownBusSelected == true ?
                  <TouchableHighlight
                    underlayColor={cardBackgroundColor}
                    onPress={() => {
                      this.setState({ isUTownBookmarked: !this.state.isUTownBookmarked});
                      this.state.isUTownBookmarked == true ? ToastAndroid.show('Added to Bookmarks', ToastAndroid.SHORT) : ToastAndroid.show('Removed from Bookmarks', ToastAndroid.SHORT);
                    }}
                  >
                    <View style={styles.cardSection}>
                      <Text style={this.state.isUTownBookmarked == true ? styles.cardTitleActive : styles.cardTitle}>9</Text>
                      <Text style={this.state.isUTownBookmarked == true ? styles.cardSubtitleActive : styles.cardSubtitle}>Mins</Text>
                    </View>
                  </TouchableHighlight>
                : <View style={styles.cardSection}>
                    <Text style={styles.cardTitleHidden}>9</Text>
                    <Text style={styles.cardSubtitleHidden}>Mins</Text>
                  </View>
              }
            </Card>
          </View>
        }
      </Container>
    );
  }
}

export default DirectoriesView;
