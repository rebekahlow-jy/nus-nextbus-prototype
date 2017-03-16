import React, {
    Component,
    View,
} from 'react-native';

import styles from './styles';

export default class Card extends Component {
  render() {
    return (
      <View style={styles.card}>
        <View style={styles.cardContainer}>
          {this.props.children}
        </View>
        <View style={styles.cardShadow}/>
      </View>
    );
  }
}
