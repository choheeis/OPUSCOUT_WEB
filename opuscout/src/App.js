/* External Dependencies */
import React, {Component} from 'react';
import { Route } from 'react-router-dom';

/* Internal Dependencies */
import Home from './containers/Home';
import Item from './containers/Item';
import Category from './containers/Category';
import Keyword from './containers/Keyword';
import Hot from './containers/Hot';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import { MainProvider } from './provider/MainProvider';
import Login from './containers/Login';
import Signup from './containers/Signup';


class App extends Component {

  render() {
    return (
      <MainProvider>
        <div className="App">
          <Header />
          <Route path="/" component={Home} exact />
          <Route path="/item" component={Item} exact />
          <Route path="/keyword" component={Keyword} exact/>
          <Route path="/category" component={Category} exact/>
          <Route path="/hot" component={Hot} exact/>
          <Route path="/login" component={Login} exact/>
          <Route path="/signup" component={Signup} exact/>
          <Footer />
        </div>
      </MainProvider>
    );
  }
}

export default App;
