import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handleActions } from 'redux-actions';

class App extends Component {        
  render() {
    console.log('프롭스 내용:', this.props);
    console.log(this.props.store.getState().num);
        
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
const initState = { num: 100, }

export const reducer = handleActions({
  [INC]:(state, action)=> ({ num:state.num+1 }),
  [DEC]:(state, action)=> ({ num:state.num-1 }),
}, initState);

const dispatchToProps = dispatch => bindActionCreators({
  onInc: inc,
  onDec: dec
} , dispatch);

const stateToProps = (state)=>({num:state.num});

export default App = connect(
  stateToProps,
  dispatchToProps
)(App);