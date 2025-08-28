import React, { Component } from 'react';

class App extends Component {
  f01(e) {
    console.log('call');
    let value = e.target.value;
    console.log(value);
  }

  f02(e) {
    console.log(e.target.value);
  }

  render() {
    return (
      <div>
        <button onClick={()=> {this.f01()}}>버튼1</button><br/>
        <input type='text' onChange={e=>{this.f01(e)}}/>
        <select onChange={this.f02}>
          <option value='tiger1'>호랑이1</option>
          <option value='tiger2'>호랑이2</option>
          <option value='tiger3'>호랑이3</option>
        </select>
      </div>
    );
  }
}

export default App;