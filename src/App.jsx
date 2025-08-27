import axios from 'axios';
import React, { Component } from 'react';

class App extends Component {
  async func01() {
    console.log('func01 call');
    // fetch는 비동기 함수
    // await는 fetch 함수를 동기화시킨다
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let data = await res.json;
    console.log(data);    
    console.log(data.title);
  }

  func02() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(res=>{return res.json(); })
      .then((data)=>{ console.log(data); });
  }

  func03() {
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then( res => {
      //let {userId, id, title, completed} = res.data;
      //console.log(userId, id, title, completed);
      console.log(res.data[0].userId);      
    });
  }

  render() {
    return (
      <div>
        <button onClick={()=> {this.func01()}}>버튼1</button><br/>
        <button onClick={()=> {this.func02()}}>버튼2</button><br/>
        <button onClick={()=> {this.func03()}}>버튼3</button><br/>
      </div>
    );
  }
}

export default App;