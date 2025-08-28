import React, { Component } from 'react';

class App extends Component {
num = 10
f01() {
  console.log(this.num);
  
}
f02 = function() {
  console.log(this.num);
}
f03 = ()=>{
  console.log(this.num);
}
f04() {
  let temp = this;
  (function(){
    console.log(temp.num);
  })();
}
f05() {
  (function(){
    console.log(this.num);    
  }.bind(this))();
}
f06 () {
  (()=>{
    console.log(this.num);    
  })();
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


// 'function' 대신 '=>' 문자열을 사용하며 'return' 문자열을 생략할 수도 있다

// # 즉시실행+람다함수+슈가코드
// ```
// import React, { Component } from 'react';

// class App extends Component {
//   f01() {
//     console.log(1);
//   }
//   f02 = function() {
//     console.log(2);
//   }
//   f03 = ()=> {
//     console.log(3);
//   }
//   f04() {
//     // 내부 함수
//     function f05() {
//       console.log(5);
//     }
//     let f06 = function() {
//       console.log(6);
//     }
//     let f07 = ()=> {
//       console.log(7); 
//     }
//     f05();
//     f06();
//     f07();
//   }

//   render() {
//     this.f01();
//     this.f02();
//     this.f03();
//     // 즉시 실행함수(IIFE)
//     (function(num, name) {
//       console.log(num, name);
//     }) (9999, 'tiger');

//     ((a, b)=>{
//       console.log(a, b);
//     })(8888, 'lion');
    
//     // 1. () => {}
//     // 2. (()=>{})
//     // 3. 
//     // (()=>{
//     //   console.log(7777);
//     // })();
//     // 4.
//     // ((num)=>{
//     //   return num + 1000;
//     // })(234);
//     // 5.
//     // console.log(
//     //   ((num)=>{
//     //     return num + 1000;
//     //   })(234)
//     // );
//     // 6.
//     console.log((num=> num + 1000)(234));
    
    
    
//     return (
//       <div>
//         <p>08/25</p>
//         <button onClick={()=> this.f01()}>버튼1</button><br/>
//         <button onClick={()=> this.f02()}>버튼2</button><br/>
//         <button onClick={()=> this.f03()}>버튼3</button><br/>
//         <button onClick={()=> this.f04()}>버튼4</button><br/>
//         </div>
//     );
//   }
// }

// export default App;
// ```


// ```
// import React, { Component } from 'react';

// class App extends Component {
//   f01() {
//     console.log(1);
//     // 중첩
//     let a = {
//       b:100,
//       C:'tiger', 
//       d: {
//         a:{
//           a:{
//             a: 8888,
//           },
//         },
//       },
//       e: true,
//       f: function(){}, 
//     };
//     console.log(a.d.a.a.a);
//   }

//   f02(){
//     let obj = {
//       f3:function(){},
//       f4:()=>{}
//     };
//     obj.f3();
//     obj.f4();
//   }

//   f03(){
//     // 일반함수가 아니다 생성자함수이다(함수 이름 첫자가 대문자) = 클래스와 동일
//     function Myfunc(){
//       // 멤버 변수
//       this.num = 100;
//       // 멤버 함수
//       this.memberFunc1 = ()=>{console.log('memberFunc1'); };
//       this.memberFunc2 = function(){};
//     }
//     Myfunc.prototype.memberFunc3 = function(){};

//     // Myfunc(); 말도 안되는 코드이다
//     let mf = new Myfunc();
//     console.log(mf.num);
//     mf.memberFunc1();
//   }

//   f04(){
//     class Tiger{
//       num = 10;
//       f1(){}
//     }
//     let t = new Tiger();
//     t.num;
//     t.f1();
//   }

//   f05() {
//     // ( ()=>{} )(); >> 선호 코드
//     // 1. 즉시 실행함수
//     // 2, 생성자 함수
//     // 3. 클래스도 리턴타입에 포함된다
//     let F2 = (function() {
//       function F1() {
//       this.n = 10
//     }
//     F1.prototype.f2 = function() { 
//     console.log(this.n)
//     };
//     return F1;  
//   } ) ();
//   let ins = new F2();
//   ins.f2();

//   class F3 {
//     constructor(num) {
//       this.num = num;
//     }
//     f2 = function() {
//       console.log(this.num)
//     }
//   }
//   let ins2 = new F3();
//   ins2.f2();
// }

//   render() {
//     return (
//       <div>
//         <p>08/25</p>
//         <button onClick={()=> this.f01()}>버튼1</button><br/>
//         <button onClick={()=> this.f02()}>버튼2</button><br/>
//         <button onClick={()=> this.f03()}>버튼3</button><br/>
//         <button onClick={()=> this.f04()}>버튼4</button><br/>
//         </div>
//     );
//   }
// }

// export default App;