import React, { Component } from 'react';
// import Bpp from './components/Bpp';
import BppContainer from './containers/BppContainer';

class App extends Component {
  render() {
    return (
      <div>
        <p>App</p>
        <BppContainer/>
        {/*<ConnectBpp/>*/}
      </div>
    );
  }
}

export default App;