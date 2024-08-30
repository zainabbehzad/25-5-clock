import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Display from './components/Display';
import './App.css';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <h1>25 + 5 Clock</h1>
      <Display />
      <audio id="beep" src="https://www.soundjay.com/button/beep-07.wav" preload="auto"></audio>
    </div>
  </Provider>
);

export default App;
