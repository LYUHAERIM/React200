import React, { Component } from 'react';

class App extends Component {

f01() {
  let ar = [10, 20, 30, 40];
  let br = [];
  // ar.forEach( 람다함수를 요구 )
  // value, v, item
  ar.forEach( value => {
    console.log(value);
    br.push(value);
  } );
  console.log('br:', br);
  
  console.log('-------------------------------');
  
  ar.forEach( (value, index) => {
    console.log(value, index);
  } );

  console.log('-------------------------------');

  ar.forEach( (a, b, c) => {
    console.log(a, b, c);
  } );
}

  f02 () {
    let ar = [10, 21, 30, 41];
    let br = ar.map((value)=>{
      return value * 3;
    })
    console.log(br);
    let cr = ar.map((value)=>{
      // if(value % 2 == 0) {
      //   return '호랑이';
      // } else {
      //   return '원숭이';
      // }
      return (value % 2 == 0) ? '호랑이':'원숭이';
    })
    console.log(cr);
    let temp = [
      {
        key1:'설정데이터1',
        key2:'설정데이터2'
      },
      {
        key3:'설정데이터3',
        key4:'설정데이터4'
      }
    ];
    console.log(temp[0].key1);
    temp.map((value)=>{
      console.log(value);
      // console.log(value.key1);
      return 0;
      
    })
  }
 
render() {
    return (
      <div>
        <p>08/26</p>
        <button onClick={()=> this.f01()}>버튼1</button><br/>
        <button onClick={()=> this.f02()}>버튼2</button><br/>
        <button onClick={()=> this.f03()}>버튼3</button><br/>
        <button onClick={()=> this.f04()}>버튼4</button><br/>
        <button onClick={()=> this.f05()}>버튼5</button><br/>
        <button onClick={()=> this.f06()}>버튼6</button><br/>
        </div>
    );
  }
}

export default App;