import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handleActions } from 'redux-actions';

// 1. npm install redux
// 2. npm install react-redux
// 3. npm install @reduxjs/toolkit
// 4. npm install redux-actions

class App extends Component {
  f01(){
    console.log('func01 call');
  }        
  render() {
    console.log('프롭스 내용:', this.props);
    
    return (
      <div>
        <p>App</p>
        <button onClick={ this.props.onInc }>증가</button><br/>
        <button onClick={ this.props.onDec }>감소</button><br/>
        <h3>{this.props.num}</h3>
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

// export function reducer(state=initState, action){
//   console.log('Reducer: ', action.type);
//   switch(action.type) {
//     case INC: return { num:state.num+1 };
//     case DEC: return { num:state.num-1 };
//     default: return state;  
//   }
// }

export const reducer = handleActions({
  [INC]:(state, action)=> ({ num:state.num+1, action }),
  [DEC]:(state, action)=> ({ num:state.num-1, action }),
}, initState);

// const dispatchToProps = dispatch => ({
//   onInc:()=>{ dispatch(inc()); },
//   onDec:()=>{ dispatch(dec()); },
// });

const dispatchToProps = dispatch => bindActionCreators({
  onInc: inc,
  onDec: dec
} , dispatch);

//func(dispatch, onInc, 'INC')

const stateToProps = (state)=>{
  console.log('StateToProps', state);
  return { num:state.num };
}

export default App = connect(
  stateToProps,
  dispatchToProps
)(App);