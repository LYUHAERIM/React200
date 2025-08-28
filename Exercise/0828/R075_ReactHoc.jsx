import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <p>app</p>
        <BBpp/>        
        <CCpp/>        
      </div>
    );
  }
}

function withF1() {
  return class CommonComponent extends Component {
    render() {
      return (
        <div>
          <p>목록</p>
          <Hoc/>
        </div>
      );
    }
  }
}

class Bpp extends Component {
  render() {
    return (
      <div>
        {/* <p>목록</p> */}
        <p>bpp1</p><p>bpp2</p><p>bpp3</p>
      </div>
    );
  }
}

let BBpp = withF1(Bpp)

class Cpp extends Component {
  render() {
    return (
      <div>
        <p>목록</p>
        <p>cpp1</p><p>cpp2</p><p>cpp3</p>
      </div>
    );
  }
}

let CCpp = withF1(Cpp)

export default App;