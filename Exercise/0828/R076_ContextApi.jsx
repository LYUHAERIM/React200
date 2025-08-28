import React, { Component } from 'react';
const {Provider, Consumer} = React.createContext();

class App extends Component {
  render() {
    return (
      <div>
        <Provider value='tiger'>
          <p>app</p>
          <Bpp/> 
        </Provider>
      </div>
    );
  }
}

class Bpp extends Component {
  render() {
    return (
      <div>
        <p>bpp</p> 
        <Cpp/>
      </div>
    );
  }
}

class Cpp extends Component {
  render() {
    return (
      <div>
        <Consumer>
          {(cv)=>{return <h3>{cv}</h3>}}
        </Consumer>
        <Consumer>
          {cv=><h3>{'result:' + cv}</h3>}
        </Consumer>
        <Consumer>
          {cv=><h3>{`result:+ ${cv}`}</h3>}
        </Consumer>
        <p>cpp</p> 
      </div>
    );
  }
}

export default App;