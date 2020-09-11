/* External Dependencies */
import React, {Component} from 'react';
import { Route } from 'react-router-dom';

/* Internal Dependencies */
import Hot from './containers/Hot';
import Home from './containers/Home';
import Header from './components/common/Header';
import Item from './containers/Item';

import { MainProvider } from './provider/MainProvider';
import Footer from './components/common/Footer';
import Category from './containers/Category';
import Keyword from './containers/Keyword';

class App extends Component {

  render() {
    return (
      <MainProvider>
        <div className="App">
          <Header />
          
          <Route path="/" component={Home} exact />
          <Route path="/item" component={Item} exact />
          <Route path="/keyword" component={Keyword} exact/>
          <Route path="/hot" component={Hot} exact/>
        
          {/* <Route path="/keyword" component={Keyword} exact/>
          <Route path="/category" component={Category} exact/>*/}
          <Footer />
        </div>
      </MainProvider>
    );
  }
}

export default App;
