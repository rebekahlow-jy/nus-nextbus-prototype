import React, {
    Component,
    PropTypes,
    Text,
    View,
    TouchableHighlight,
} from 'react-native';

import Container from '../../components/common/container'
import SearchView from '../../components/search-view';

import styles from './styles';

class BookmarksView extends Component {
  render() {
    var { increment, decrement, counter, navigator } = this.props;
    return (
      <Container>
        <Text style={styles.text}>Clicked: {counter} times</Text>
        <TouchableHighlight onPress={increment}>
          <Text style={styles.text}>+</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={decrement}>
          <Text style={styles.text}>-</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigator.push({component: SearchView})}>
          <Text style={styles.text}>Increment async</Text>
        </TouchableHighlight>
        <Text style={styles.text}> TESTING </Text>
      </Container>
    );
  }
}

BookmarksView.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
};

export default BookmarksView;
