import React, {Component} from 'react';
import Header from './components/common/Header';
import { Route } from 'react-router-dom';
import Item from './containers/Item';
import Keyword from './containers/Keyword';
import Category from './containers/Category';
import Hot from './containers/Hot';
import Home from './containers/Home';
import { MainProvider } from './provider/MainProvider';
import Footer from './components/common/Footer';

class App extends Component {
  render() {
    return (
      <MainProvider>
        <div className="App">
          <Header />
          <Route path="/" component={Home} exact />
          <Route path="/item" component={Item} exact />
          <Route path="/hot" component={Hot} exact/>
          {/* <Route path="/keyword" component={Keyword} exact/>
          <Route path="/category" component={Category} exact/>*/}
          {/* <Footer /> */}
        </div>
      </MainProvider>
    );
  }
}

export default App;
