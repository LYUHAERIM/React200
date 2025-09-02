import React, { Component } from 'react';
import { observer } from 'mobx-react';
import totalStore from './store'

class App extends Component {
  render() {
    return (
      <div>
        <p>App</p>
        <p>{totalStore.ts1.count}</p>
        <button onClick={()=>{totalStore.ts1.increase()}}>증가</button><br/>
        <button onClick={()=>{totalStore.ts1.decrease()}}>감소</button><br/>
        <p>{totalStore.ts2.count}</p>
        <button onClick={()=>{totalStore.ts2.increase()}}>증가</button><br/>
        <button onClick={()=>{totalStore.ts2.decrease()}}>감소</button><br/>
      </div>
    );
  }
}

export default observer(App);