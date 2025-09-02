import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import './CSS/new.css';
import Header from './Header admin.jsx';
import Footer from './Footer.jsx';
import LoginForm from './LoginForm.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <img src='./춘식이.png' alt=''/>
          <Header/>
            <Routes>
              <Route path='/' element={<LoginForm/>}/>
            </Routes>
          <Footer/>
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