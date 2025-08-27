import React, { Component } from 'react';

class App extends Component {
// 화면상으로는 안보이지만 props 에 전달됨
  render() {
    return (
      <div>
        <p>App</p>
        <Bpp><h1>짜장면</h1></Bpp>
        </div>
    );
  }
}

class Bpp extends Component {
render() {
  console.log(this.props);
    let {children} = this.props;
    return (
      <div>
        <p>Bpp</p>
        {children}
        </div>
    );
  }
}

export default App;