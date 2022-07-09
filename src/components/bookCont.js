import React from 'react';
import Navbar from './navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Category from './category';
import Books from './books';
import Input from './inputs';
import Items from './items';
class BookContainer extends React.Component {
  // state = {
  //   books: [
  //     {
  //       id: 1,
  //       title: 'book1',
  //       Author: 'Author1',
  //     },
  //     {
  //       id: 2,
  //       title: 'book2',
  //       Author: 'Author2',
  //     },
  //     {
  //       id: 3,
  //       title: 'book3',
  //       Author: 'Author3',
  //     },
  //   ],
  // };
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div>
            <Items />
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Books  />
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
  }
}
export default BookContainer;
