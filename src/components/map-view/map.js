import React, {
    Component,
    Text,
    View,
    Image,
    PanResponder,
    Animated,
} from 'react-native';

import Container from '../../components/common/container';
import Card from '../../components/common/card'

import styles from './styles';

class Map extends Component {
  constructor(props){
    super(props);
    this.state = {
      pan: new Animated.ValueXY()
    };
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      // Initially, set the value of x and y to 0 (the center of the screen)
      onPanResponderGrant: (e, gestureState) => {
        // Set the initial value to the current state
        this.state.pan.setOffset({x: this.state.pan.x._value, y: this.state.pan.y._value});
        this.state.pan.setValue({x: 0, y: 0});
      },
      // When we drag/pan the object, set the delate to the states pan position
      onPanResponderMove: Animated.event([
        null, {dx: this.state.pan.x, dy: this.state.pan.y},
      ]),
      onPanResponderRelease: (e, {vx, vy}) => {
        // Flatten the offset to avoid erratic behavior
        this.state.pan.flattenOffset();
      }
    })
  }

  render() {
    // Destructure the value of pan from the state
    let { pan } = this.state;
    // Calculate the x and y transform from the pan value
    let [translateX, translateY] = [pan.x, pan.y];
    // Calculate the transform property and set it as a value for our style which we add below to the Animated.View component
    let imageStyle = {
      transform: [{translateX}, {translateY}],
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    };

    return (
      <View>
        <View style={styles.mapNotificationContainer}>
          <Text style={styles.mapNotificationText}>
            Drag pin on map to see the nearest bus stop
          </Text>
        </View>
        <View style={styles.containerShadow} />
        <View style={styles.imageContainer}>
          <Image source={require("../../img/nus-map.jpg")}>
            <View style={styles.mapPinContainer}>
              <Animated.View style={imageStyle} {...this._panResponder.panHandlers}>
                <Image source={require('../../img/map-pin-resized.png')} />
                <View style={styles.mapPinTextContainer}>
                  <Text style={styles.mapPinText}>Bus Stop: Central Library </Text>
                </View>
              </Animated.View>
            </View>
          </Image>
        </View>
      </View>
    );
  }
}

export default Map;
