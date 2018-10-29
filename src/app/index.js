import React, { Component } from 'react';
import { Provider } from 'react-redux';

import LayoutProvider from '../theme/LayoutProvider';
import store from '../store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <LayoutProvider />
      </Provider>
    );
  }
}

export default App;
