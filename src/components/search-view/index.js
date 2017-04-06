import React, {
    Component,
    PropTypes,
    Text,
    View,
    TextInput,
} from 'react-native';

import Container from '../../components/common/container';
import Card from '../../components/common/card';

import { cardSubtitleColor } from '../../styles/common';
import styles from './styles';

class SearchView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fromValue: '',
      toValue: '',
    };
  }

  render() {
    var { navigator } = this.props;
    var title = 'Search';
    return (
      <Container title={title} navigator={navigator}>
        <View style={styles.searchContainer}>
          <Text style={styles.searchLabel}>
            From
          </Text>
          <TextInput
            style={styles.textInput}
            returnKeyType='next'
            underlineColorAndroid={cardSubtitleColor}
            autoFocus={false}
            onSubmitEditing={(event) => {
              this.refs.toInput.focus();
            }}
            value={this.state.fromValue}
            onChangeText={(text) => { this.setState({ fromValue: text });} }
          />
        </View>
        <View style={styles.searchContainer}>
          <Text style={styles.searchLabel}>
            To
          </Text>
          <TextInput
            ref='toInput'
            underlineColorAndroid={cardSubtitleColor}
            autoFocus={false}
            style={styles.textInput}
            value={this.state.toValue}
            onChangeText={(text) => { this.setState({ toValue: text });} }
          />
        </View>
        <View style={styles.containerShadow} />
        <View style={styles.containerSpaceBetween} />
        {
          (this.state.fromValue !== '' || this.state.toValue !== '') ?
          <View>
            <Card>
              <View style={styles.cardSection}>
                <Text style={styles.cardTitle}>D1</Text>
              </View>
              <View style={styles.cardSection}>
                <Text style={styles.cardSubtitle}>KR MRT</Text>
                <Text style={styles.cardContent}>University Town > Central Library > BIZ2</Text>
              </View>
              <View style={styles.cardSection}>
                <Text style={styles.cardTitle}>5</Text>
                <Text style={styles.cardSubtitle}>Mins</Text>
              </View>
            </Card>
            <Card>
              <View style={styles.cardSection}>
                <Text style={styles.cardTitle}>A1</Text>
              </View>
              <View style={styles.cardSection}>
                <Text style={styles.cardSubtitle}>KR MRT</Text>
                <Text style={styles.cardContent}>KR MRT > Central Library > PGP Terminal</Text>
              </View>
              <View style={styles.cardSection}>
                <Text style={styles.cardTitle}>9</Text>
                <Text style={styles.cardSubtitle}>Mins</Text>
              </View>
            </Card>
          </View>
          : <View></View>
        }
      </Container>
    );
  }
}

export default SearchView;
