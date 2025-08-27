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