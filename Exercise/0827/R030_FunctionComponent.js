import React from 'react';

// 함수형 컴포넌트 >> 생성자함수 >> 클래스와 동격 개념
// 함수형-단점 >> 클래스형 >> 함수형-보완(혹스)
// 1. 생명주기가 없다 (단점) >> + 혹스
// 2. 생성자가 없다
// 3. props는 함수의 인수로 전달 받는다
// 4. state가 없다
// 5. render함수가 없다
function App() {
  return (
    <div>
      <p>App</p>
      <Bpp tiger={'호랑이'}/>
    </div>
  );
}

function Bpp(props) {
  console.log(1, props);
  console.log(2, props.tiger);
  let {tiger} = props;
  console.log(3, tiger);
  
  return (
    <div>
      <p>Bpp</p>
      {tiger}<br/>
      {props.tiger}
    </div>
  );
}

export default App;


// import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     return (
//       <div>
        
//       </div>
//     );
//   }
// }

// export default App;