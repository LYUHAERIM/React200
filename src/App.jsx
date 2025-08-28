import React, { Component } from 'react';
const {Provider, Consumer} = React.createContext();

class App extends Component {
  constructor() {
    super();
    this.state = {
      num:100,
    };
  }

  f01 = () => {
    this.setState({num:this.state.num+1})
  }

  render() {
    let tiger = {...this.state, fff:this.f01};
    console.log('내용:', tiger);
    
    return (
      <div>
        <Provider value={tiger}>
          <p>app</p>
          <p>{this.state.num}</p>
          <button onClick={()=> {this.f01()}}>버튼1</button><br/>
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
          {(cv)=>{
            return <button onClick={
              ()=>{cv.fff()}
            }>Cpp의 버튼{cv.num}</button>
          }}
        </Consumer>
        <p>cpp</p> 
      </div>
    );
  }
}

export default App;