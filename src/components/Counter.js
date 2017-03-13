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

import { text, background } from '../styles';

class Counter extends Component {
  render() {
    var { increment, decrement, counter, navigator } = this.props;
    return (
      <View style={background.container}>
        <Text style={text.p}>Clicked: {counter} times</Text>
        <TouchableHighlight onPress={increment}>
          <Text style={text.p}>+</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={decrement}>
          <Text style={text.p}>-</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigator.push({component: CustomScreen})}>
          <Text style={text.p}>Increment async</Text>
        </TouchableHighlight>
        <Text style={text.p}>HELLO</Text>
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
