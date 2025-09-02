import React, { Component } from 'react';
import Header from './Header admin.jsx';
import Footer from './Footer.jsx';
import './CSS/new.css';

class App extends Component {
  render() {
    return (
      <div>
          <Header/>
          <Footer></Footer>
      </div>
    );
  }
}

class Bpp extends Component {
  render() {
    return (
      <div>
        <p>Bpp</p>
      </div>
    );
  }
}

class Cpp extends Component {
  render() {
    return (
      <div>
        <p>Cpp</p>
      </div>
    );
  }
}

export default App;