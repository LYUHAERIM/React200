import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  f01(){
    console.log('func01 call');
  }        
  render() {
    console.log('프롭스 내용:', this.props);
    
    return (
      <div>
        <p>App</p>
        <button onClick={ this.props.onInc }>버튼1</button><br/>
      </div>
    );
  }
}

export function reducer(state={num:0}, action){
  console.log('Reducer: ', action.type, state);
  return {};
}

const dispatchToProps = (dispatch)=>{
  //console.log('dispatchToProps');
  return {
    onInc:()=>{
      console.log('Dispatch:onInc');
      dispatch({type:'INC'});
    },
  };
}
const stateToProps = ()=>{
  console.log('StateToProps');
  return {};
}

export default App = connect(
  stateToProps,
  dispatchToProps  
)(App);