import React, {
    Component,
    PropTypes,
    Text,
    View,
    TouchableHighlight,
} from 'react-native';

import Container from '../../components/common/container'

import styles from './styles';

class BookmarksView extends Component {
  render() {
    var { navigator } = this.props;
    return (
      <Container navigator={navigator}>
        <View style={styles.contentContainer}>
          <Text>[TITLE: BOOKMARKS]</Text>
        </View>
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
