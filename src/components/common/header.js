import React, {
    Component,
    PropTypes,
    Text,
    View,
    TouchableHighlight,
} from 'react-native';

import styles from './styles';

export default class Header extends Component {
  render() {
    var { title, leftAction, rightAction } = this.props;
    return (
      <View>
        <View style={styles.header}>
        {
          !leftAction ? null :
          <View style={styles.headerAction}>
              <Text style={styles.headerActionTitle}>{leftAction}</Text>
          </View>
        }
        <Text style={styles.headerTitle}>{title}</Text>
        {
          !rightAction ? null :
          <View style={styles.headerAction}>
              <Text style={styles.headerActionTitle}>{rightAction}</Text>
          </View>
        }
        </View>
        <View style={styles.headerShadow} />
      </View>
    );
  }
}
