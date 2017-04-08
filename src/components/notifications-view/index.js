import React, {
    Component,
    Text,
    View,
    TouchableHighlight,
    Modal,
    ToastAndroid,
} from 'react-native';

import Container from '../../components/common/container';
import Card from '../../components/common/card'

import styles from './styles';

class NotificationsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isA1On: true,
      isAddCardOn: true,
      isAddCardClicked: false,
      isBusModalVisible: false,
      isStopModalVisible: false,
      isTimeModalVisible: false,
      isDayModalVisible: false,
      hasBusSelected: false,
      hasStopSelected: false,
      hasTimeSelected: false,
      hasDaySelected: false,
      busName: '',
      stopName: '',
      day: 'Monday',
      time: '09:30 - 10:00',
    };
  }

  setBusModalVisible(isBusModalVisible) {
    this.setState({isBusModalVisible: isBusModalVisible});
  }

  setStopModalVisible(isStopModalVisible) {
    this.setState({isStopModalVisible: isStopModalVisible});
  }

  setTimeModalVisible(isTimeModalVisible) {
    this.setState({isTimeModalVisible: isTimeModalVisible});
  }

  setDayModalVisible(isDayModalVisible) {
    this.setState({isDayModalVisible: isDayModalVisible});
  }

  render() {
    var { navigator } = this.props;
    var title = 'Notifications';
    var cardBackgroundColor = '#fcfcfb';
    var modalBackgroundColor = 'rgba(52, 52, 52, 0)';
    return (
      <Container title={title} navigator={navigator}>
        <Card>
          <View style={styles.cardSection}>
            <Text style={styles.cardTitle}>A1</Text>
          </View>
          <View style={styles.cardSection}>
            <Text style={styles.cardSubtitle}>Central Library</Text>
            <Text style={styles.cardContent}>Thursday 10:00 - 10.30</Text>
          </View>
          <View style={styles.cardSection}>
            <TouchableHighlight
              underlayColor={cardBackgroundColor}
              onPress={() => {
                this.setState({ isA1On: true });
                ToastAndroid.show('SMS Notification ON', ToastAndroid.SHORT);
              }}>
              <View style={styles.switchContainerActiveTop}>
                <Text style={this.state.isA1On == true ? styles.cardSwitchContent : styles.cardSwitchContentHidden}>ON</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor={cardBackgroundColor}
              onPress={() => {
                this.setState({ isA1On: false });
                ToastAndroid.show('SMS Notification OFF', ToastAndroid.SHORT);
              }}>
              <View style={styles.switchContainerBottom}>
                <Text style={this.state.isA1On == true ? styles.cardSwitchContentHidden : styles.cardSwitchContent}>OFF</Text>
              </View>
            </TouchableHighlight>
          </View>
        </Card>
        {
          this.state.isAddCardClicked == true ?
            <Card>
              <View style={styles.cardSection}>
                <TouchableHighlight underlayColor={cardBackgroundColor} onPress={() => { this.setBusModalVisible(true);}}>
                  {
                    this.state.hasBusSelected == true ?
                     <Text style={styles.cardTitle}>{this.state.busName}</Text>
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
                visible={this.state.isBusModalVisible}
                onRequestClose={() => {this.setBusModalVisible(false);
              }}>
                <View style={styles.modalContainer}>
                  <View style={styles.modalBackgroundContainer}>
                    <TouchableHighlight
                      underlayColor={modalBackgroundColor}
                      onPress={() => {
                        this.setBusModalVisible(!this.state.isBusModalVisible);
                    }}>
                      <Text style={styles.closeButton}> X </Text>
                    </TouchableHighlight>
                    <Text style={styles.modalTitle}>Select Bus</Text>
                    <TouchableHighlight
                      underlayColor={modalBackgroundColor}
                      onPress={() => {
                        this.setState({ hasBusSelected: true, busName: 'A1'});
                        this.setBusModalVisible(!this.state.isBusModalVisible);
                    }}>
                      <Text style={styles.modalContent}>A1</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                      underlayColor={modalBackgroundColor}
                      onPress={() => {
                        this.setState({ hasBusSelected: true, busName: 'D1'});
                        this.setBusModalVisible(!this.state.isBusModalVisible);
                    }}>
                      <Text style={styles.modalContent}>D1</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                      underlayColor={modalBackgroundColor}
                      onPress={() => {
                        this.setState({ hasBusSelected: true, busName: 'B1'});
                        this.setBusModalVisible(!this.state.isBusModalVisible);
                    }}>
                      <Text style={styles.modalContent}>B1</Text>
                    </TouchableHighlight>
                  </View>
                </View>
              </Modal>
              <View style={styles.cardSection}>
                <TouchableHighlight underlayColor={cardBackgroundColor} onPress={() => { this.setStopModalVisible(true);}}>
                  {
                    this.state.hasStopSelected == true ?
                     <Text style={styles.cardSubtitle}>{this.state.stopName}</Text>
                    : <Text style={styles.cardSubtitle}>[Select Bus Stop]</Text>
                  }
                </TouchableHighlight>
                <View style={styles.cardContentSection}>
                  <TouchableHighlight underlayColor={cardBackgroundColor} onPress={() => { this.setDayModalVisible(true);}}>
                    {
                      this.state.hasDaySelected == true ?
                       <Text style={styles.cardContent}>{this.state.day} </Text>
                      : <Text style={styles.cardContent}>[Select Day] </Text>
                    }
                  </TouchableHighlight>
                  <TouchableHighlight underlayColor={cardBackgroundColor} onPress={() => { this.setTimeModalVisible(true);}}>
                    {
                      this.state.hasTimeSelected == true ?
                       <Text style={styles.cardContent}>{this.state.time}</Text>
                      : <Text style={styles.cardContent}>[Select Time] </Text>
                    }
                  </TouchableHighlight>
                </View>
                <Modal
                  animationType={"slide"}
                  transparent={false}
                  visible={this.state.isDayModalVisible}
                  onRequestClose={() => {this.setDayModalVisible(false);
                }}>
                  <View style={styles.modalContainer}>
                    <View style={styles.modalBackgroundContainer}>
                      <TouchableHighlight
                        underlayColor={modalBackgroundColor}
                        onPress={() => {
                          this.setDayModalVisible(!this.state.isDayModalVisible);
                      }}>
                        <Text style={styles.closeButton}> X </Text>
                      </TouchableHighlight>
                      <Text style={styles.modalTitle}>Select Day</Text>
                      <TouchableHighlight
                        underlayColor={modalBackgroundColor}
                        onPress={() => {
                          this.setState({ hasDaySelected: true, day: 'Monday'});
                          this.setDayModalVisible(!this.state.isDayModalVisible);
                      }}>
                        <Text style={styles.modalContent}>Monday</Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        underlayColor={modalBackgroundColor}
                        onPress={() => {
                          this.setState({ hasDaySelected: true, day: 'Tuesday'});
                          this.setDayModalVisible(!this.state.isDayModalVisible);
                      }}>
                        <Text style={styles.modalContent}>Tuesday</Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        underlayColor={modalBackgroundColor}
                        onPress={() => {
                          this.setState({ hasDaySelected: true, day: 'Wednesday'});
                          this.setDayModalVisible(!this.state.isDayModalVisible);
                      }}>
                        <Text style={styles.modalContent}>Wednesday</Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        underlayColor={modalBackgroundColor}
                        onPress={() => {
                          this.setState({ hasDaySelected: true, day: 'Thursday'});
                          this.setDayModalVisible(!this.state.isDayModalVisible);
                      }}>
                        <Text style={styles.modalContent}>Thursday</Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        underlayColor={modalBackgroundColor}
                        onPress={() => {
                          this.setState({ hasDaySelected: true, day: 'Friday'});
                          this.setDayModalVisible(!this.state.isDayModalVisible);
                      }}>
                        <Text style={styles.modalContent}>Friday</Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        underlayColor={modalBackgroundColor}
                        onPress={() => {
                          this.setState({ hasDaySelected: true, day: 'Saturday'});
                          this.setDayModalVisible(!this.state.isDayModalVisible);
                      }}>
                        <Text style={styles.modalContent}>Saturday</Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        underlayColor={modalBackgroundColor}
                        onPress={() => {
                          this.setState({ hasDaySelected: true, day: 'Sunday'});
                          this.setDayModalVisible(!this.state.isDayModalVisible);
                      }}>
                        <Text style={styles.modalContent}>Sunday</Text>
                      </TouchableHighlight>
                    </View>
                  </View>
                </Modal>
                <Modal
                  animationType={"slide"}
                  transparent={false}
                  visible={this.state.isTimeModalVisible}
                  onRequestClose={() => {this.setTimeModalVisible(false);
                }}>
                  <View style={styles.modalContainer}>
                    <View style={styles.modalBackgroundContainer}>
                      <TouchableHighlight
                        underlayColor={modalBackgroundColor}
                        onPress={() => {
                          this.setTimeModalVisible(!this.state.isTimeModalVisible);
                      }}>
                        <Text style={styles.closeButton}> X </Text>
                      </TouchableHighlight>
                      <Text style={styles.modalTitle}>Select Time</Text>
                      <TouchableHighlight
                        underlayColor={modalBackgroundColor}
                        onPress={() => {
                          this.setState({ hasTimeSelected: true, time: '09:00-09:30'});
                          this.setTimeModalVisible(!this.state.isTimeModalVisible);
                      }}>
                        <Text style={styles.modalContent}>09:00-09:30</Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        underlayColor={modalBackgroundColor}
                        onPress={() => {
                          this.setState({ hasTimeSelected: true, time: '09:30-10:00'});
                          this.setTimeModalVisible(!this.state.isTimeModalVisible);
                      }}>
                        <Text style={styles.modalContent}>09:30-10:00</Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        underlayColor={modalBackgroundColor}
                        onPress={() => {
                          this.setState({ hasTimeSelected: true, time: '10:00-10:30'});
                          this.setTimeModalVisible(!this.state.isTimeModalVisible);
                      }}>
                        <Text style={styles.modalContent}>10:00-10:30</Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        underlayColor={modalBackgroundColor}
                        onPress={() => {
                          this.setState({ hasTimeSelected: true, time: '10:30-11:00'});
                          this.setTimeModalVisible(!this.state.isTimeModalVisible);
                      }}>
                        <Text style={styles.modalContent}>10:30-11:00</Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        underlayColor={modalBackgroundColor}
                        onPress={() => {
                          this.setState({ hasTimeSelected: true, time: '11:00-11:30'});
                          this.setTimeModalVisible(!this.state.isTimeModalVisible);
                      }}>
                        <Text style={styles.modalContent}>11:00-11:30</Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        underlayColor={modalBackgroundColor}
                        onPress={() => {
                          this.setState({ hasTimeSelected: true, time: '11:30-12:00'});
                          this.setTimeModalVisible(!this.state.isTimeModalVisible);
                      }}>
                        <Text style={styles.modalContent}>11:30-12:00</Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        underlayColor={modalBackgroundColor}
                        onPress={() => {
                          this.setState({ hasTimeSelected: true, time: '12:00-12:30'});
                          this.setTimeModalVisible(!this.state.isTimeModalVisible);
                      }}>
                        <Text style={styles.modalContent}>12:00-12:30</Text>
                      </TouchableHighlight>
                    </View>
                  </View>
                </Modal>
              </View>
              <Modal
                animationType={"slide"}
                transparent={false}
                visible={this.state.isStopModalVisible}
                onRequestClose={() => {this.setStopModalVisible(false);
              }}>
                <View style={styles.modalContainer}>
                  <View style={styles.modalBackgroundContainer}>
                    <TouchableHighlight
                      underlayColor={modalBackgroundColor}
                      onPress={() => {
                        this.setStopModalVisible(!this.state.isStopModalVisible);
                    }}>
                      <Text style={styles.closeButton}> X </Text>
                    </TouchableHighlight>
                    <Text style={styles.modalTitle}>Select Bus Stop</Text>
                    <TouchableHighlight
                      underlayColor={modalBackgroundColor}
                      onPress={() => {
                        this.setState({ hasStopSelected: true, stopName: 'KR MRT'});
                        this.setStopModalVisible(!this.state.isStopModalVisible);
                    }}>
                      <Text style={styles.modalContent}>KR MRT</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                      underlayColor={modalBackgroundColor}
                      onPress={() => {
                        this.setState({ hasStopSelected: true, stopName: 'LT29'});
                        this.setStopModalVisible(!this.state.isStopModalVisible);
                    }}>
                      <Text style={styles.modalContent}>LT29</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                      underlayColor={modalBackgroundColor}
                      onPress={() => {
                        this.setState({ hasStopSelected: true, stopName: 'University Hall'});
                        this.setStopModalVisible(!this.state.isStopModalVisible);
                    }}>
                      <Text style={styles.modalContent}>University Hall</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                      underlayColor={modalBackgroundColor}
                      onPress={() => {
                        this.setState({ hasStopSelected: true, stopName: 'Central Library'});
                        this.setStopModalVisible(!this.state.isStopModalVisible);
                    }}>
                      <Text style={styles.modalContent}>Central Library</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                      underlayColor={modalBackgroundColor}
                      onPress={() => {
                        this.setState({ hasStopSelected: true, stopName: 'COM2'});
                        this.setStopModalVisible(!this.state.isStopModalVisible);
                    }}>
                      <Text style={styles.modalContent}>COM2</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                      underlayColor={modalBackgroundColor}
                      onPress={() => {
                        this.setState({ hasStopSelected: true, stopName: 'PGP Terminal'});
                        this.setStopModalVisible(!this.state.isStopModalVisible);
                    }}>
                      <Text style={styles.modalContent}>PGP Terminal</Text>
                    </TouchableHighlight>
                  </View>
                </View>
              </Modal>
                {
                  (this.state.hasBusSelected && this.state.hasStopSelected && this.state.hasTimeSelected && this.state.hasDaySelected) == true ?
                    <View style={styles.cardSection}>
                      <TouchableHighlight
                        underlayColor={cardBackgroundColor}
                        onPress={() => {
                          this.setState({ isAddCardOn: true });
                          ToastAndroid.show('SMS Notification ON', ToastAndroid.SHORT);
                        }}>
                        <View style={styles.switchContainerActiveTop}>
                          <Text style={this.state.isAddCardOn == true ? styles.cardSwitchContent : styles.cardSwitchContentHidden}>ON</Text>
                        </View>
                      </TouchableHighlight>
                      <TouchableHighlight
                        underlayColor={cardBackgroundColor}
                        onPress={() => {
                          this.setState({ isAddCardOn: false });
                          ToastAndroid.show('SMS Notification OFF', ToastAndroid.SHORT);
                        }}>
                        <View style={styles.switchContainerBottom}>
                          <Text style={this.state.isAddCardOn == true ? styles.cardSwitchContentHidden : styles.cardSwitchContent}>OFF</Text>
                        </View>
                      </TouchableHighlight>
                      </View>
                  : <View style={styles.cardSection}>
                    <View style={styles.switchContainerHidden}>
                      <Text style={styles.cardSwitchContentHidden}>ON</Text>
                    </View>
                    <View style={styles.switchContainerHidden}>
                      <Text style={styles.cardSwitchContentHidden}>OFF</Text>
                    </View>
                  </View>
                }
            </Card>
          : null
        }
        <View style={styles.tabContainer}>
          <TouchableHighlight underlayColor={cardBackgroundColor} onPress={() => { this.setState({ isAddCardClicked: true });}}>
            <View>
              <Text style={styles.tabTitle}>Add Notification</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.containerShadow} />
      </Container>
    );
  }
}

export default NotificationsView;
