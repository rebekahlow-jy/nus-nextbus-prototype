import React, {
    Component,
    PropTypes,
    Text,
    View,
    Navigator,
    TouchableHighlight,
} from 'react-native';

import SplashView from './splash-view';

class Root extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: false };
  }

  componentWillUnmount() {
    this.setState({ isLoading: true });
  }

  renderScene(route, navigator) {
    console.log('Render Scenes', route);
    const Component = route.component;
    return (
      <Component navigator={navigator} route={route} {...this.props} />
    );
  }

  render() {
    var { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props;
    return (
      <Navigator
        renderScene={this.renderScene.bind(this)}
        initialRoute={{ name: 'SplashView', component: SplashView }}
      />
    );
  }
}

Root.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
};

export default Root;
