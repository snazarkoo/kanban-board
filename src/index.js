import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import AppComponent from './components/App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import configureStore from './store';
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
 body {
    font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif !important;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const App = (
  <Fragment>
    <GlobalStyle />
    <Provider store={configureStore()}>
      <AppComponent />
    </Provider>
  </Fragment>
);

ReactDOM.render(App, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
