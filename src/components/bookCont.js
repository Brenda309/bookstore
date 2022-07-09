import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './navbar';
import Category from './category';
import Books from './books';
import Input from './inputs';
import Items from './items';

const BookContainer = () => (
  <Router>
    <div className="App">
      <Navbar />
      <div>
        <Items />
      </div>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Books />
          </Route>
          <Route path="/category">
            <Category />
          </Route>
        </Switch>
      </div>
      <Input />
    </div>
  </Router>
);
export default BookContainer;
