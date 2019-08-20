import React, {Component} from 'react';
import HeaderNav from './containers/HeaderNav/HeaderNav';
//import {SideBar} from './containers/SideBar/SideBar';
import {Home} from './containers/Home/Home';
import './containers/Home/Home.scss';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <HeaderNav />
        <Home />
      </React.Fragment>
    );
  }
}

export default App;
