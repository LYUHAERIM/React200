import React, { useEffect, useState } from 'react';

function App() {
  let [rabbit, setRabbit] = useState(100);

  // 비동기 함수
  useEffect(()=>{
    console.log(3);
  });
  console.log(2);

  let f01 = function() {
    console.log('func01 call');
    setRabbit(rabbit+1);
  }

  // state로 사용하는 변수는 rabbit이다
  // rabbit값을 변경하고 싶을 때는 반드시 setRabbit함수를 사용
  // rabbit변수의 초기값은 100이다
  
  return (
    <div>
      <button onClick={()=> {f01()}}>버튼1</button><br/>
      <button onClick={()=> {setRabbit(rabbit+10)}}>버튼2</button><br/>
      <p>{rabbit}</p>
    </div>
  );
}

export default App;