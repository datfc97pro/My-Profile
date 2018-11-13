import React, { Component } from 'react';
import Header from './component/Header';
import Content1 from './component/Content1';
import Content2 from './component/Content2';
import Content3 from './component/Content3';
import Footer from './component/Footer';
import Content4 from './component/Content4';


class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Content1></Content1>
        <Content2></Content2>
        {/* <Content3></Content3> */}
        <Content4></Content4>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
