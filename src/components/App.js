import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from '../store';
import Timer from './Timer';
import KeyCatcher from './KeyCatcher';
import Screen from './Screen';
import Pixel from './Pixel';
import Lasers from './Lasers';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Timer>
          <KeyCatcher>
            <Screen>
              <Pixel />
              <Lasers />
            </Screen>
          </KeyCatcher>
        </Timer>
      </Provider>
    );
  }
}

export default App;
