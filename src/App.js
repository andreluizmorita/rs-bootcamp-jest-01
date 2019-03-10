import React, { Component } from 'react';
import { Provider } from 'react-redux';

import './config/reactotron';

import TodoList from './components/TodoList';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <p>Hello World</p>
          <TodoList />
        </div>
      </Provider>
    );
  }
}

export default App;
