import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './navbar';
import Category from './category';
// import Books from './books';
import Input from './inputs';
import Items from './items';
import store from './redux/configureStore';

const BookContainer = () => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Items />
              <Input />
            </Route>
            <Route path="/category">
              <Category />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  </Provider>
);
export default BookContainer;
