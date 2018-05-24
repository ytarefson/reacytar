import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Header from 'components/Header';
import Clock from 'components/Clock';
import PostsList from 'containers/PostsListContainer';
import Post from 'containers/PostContainer';

import './assets/style.scss';

class App extends Component {
  constructor(props) {
    super(props); 
  }
  render() {
    return(
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/" component={Clock} />
          <Route exact path="/posts" component={PostsList} />
          <Route path="/posts/:id" component={Post} />
        </Switch>
      </div>
    );
  }
}

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('main')
);