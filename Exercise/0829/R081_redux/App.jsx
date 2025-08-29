import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handleActions } from 'redux-actions';

class App extends Component {
  render() {
    return (
      <div>
        <p>App</p>
        <ConnectBpp/>
      </div>
    );
  }
}

class Bpp extends Component {
  render() {
    console.log(this.props.num);
    
    return (
      <div>
        <p>Bpp</p>
        <button onClick={this.props.onInc}>증가</button><br/>
        <button onClick={this.props.onDec}>감소</button><br/>
        <p>{this.props.num}</p>
      </div>
    );
  }
}

const INC = 'INC';
const DEC = 'DEC';
const inc = ()=> ({type:INC});
const dec = ()=> ({type:DEC});
const initState = { 
  num: 100, 
}

// R
export const reducer = handleActions({
  [INC]:(state, action)=> ({ num:state.num+1 }),
  [DEC]:(state, action)=> ({ num:state.num-1 }),
}, initState);

// D
const dispatchToProps = dispatch => bindActionCreators({
  onInc: inc,
  onDec: dec
} , dispatch);

// S
const stateToProps = (state)=>{
  console.log('StateToProps', state);
  return { num:state.num };
}


const ConnectBpp = connect(
  stateToProps,
  dispatchToProps
)(Bpp);


export default App;