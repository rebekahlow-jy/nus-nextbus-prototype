import React, {
    Component,
    PropTypes,
    Text,
    View,
    Linking,
    TouchableHighlight,
    AlertIOS
} from 'react-native';

import CustomScreen from './Screen';

class Counter extends Component {
  render() {
    var { increment, decrement, counter, navigator } = this.props;
    return (
      <View>
        <Text >Clicked: {counter} times</Text>
        <TouchableHighlight onPress={increment}>
          <Text>+</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={decrement}>
          <Text>-</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigator.push({component: CustomScreen})}>
          <Text>Increment async</Text>
        </TouchableHighlight>
        <Text>HELLO</Text>
      </View>
    );
  }
}

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
};

export default Counter;
