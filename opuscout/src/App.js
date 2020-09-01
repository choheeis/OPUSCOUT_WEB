import React, {Component} from 'react';
import Header from './components/Header';
import { Route } from 'react-router-dom';
import Item from './containers/Item';
import Keyword from './containers/Keyword';
import Category from './containers/Category';
import Hot from './containers/Hot';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>{this.props.children}</Header>
        <Route path="/item" component={Item} exact />
        <Route path="/keyword" component={Keyword} exact/>
        <Route path="/category" component={Category} exact/>
        <Route path="/hot" component={Hot} exact/>
      </div>
    );
  }
}

export default App;
