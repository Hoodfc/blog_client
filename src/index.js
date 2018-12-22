import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Article from './Components/Article';
import Header from './Components/Header';
import Home from './Components/Home';
import theme from './theme';
import User from './Components/User';

import * as serviceWorker from './serviceWorker';
import './App.css';

function Root() {
  return (
    <MuiThemeProvider theme={theme}>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/article" component={Article} />
          <Route path="/user" component={User} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
}

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
