import React, { Component } from 'react';
// import Bpp from './components/Bpp';
import BppContainer from './containers/BppContainer';
import CppContainer from './containers/CppContainer';

class App extends Component {
  render() {
    return (
      <div>
        <p>App</p>
        <BppContainer/>
        <CppContainer/>
      </div>
    );
  }
}

export default App;