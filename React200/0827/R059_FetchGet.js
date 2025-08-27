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
  render() {
    return (
      <div>
        <button onClick={()=> {this.func01()}}>버튼1</button><br/>
      </div>
    );
  }
}

export default App;


//   func02() {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(res=>{
//         console.log(res);
//         res.json();
//       })
//       .then((data)=>{
//         console.log(data);
//       });
//   }


// import React, { Component } from 'react';

// class App extends Component {
//   async func01() {
//     console.log('func01 call');
//     // fetch는 비동기 함수
//     // await는 fetch 함수를 동기화시킨다
//     const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     let data = await res.json;
//     console.log(data);    
//     console.log(data.title);
//   }

//   func02() {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(res=>{return res.json(); })
//       .then((data)=>{ console.log(data); });
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={()=> {this.func01()}}>버튼1</button><br/>
//         <button onClick={()=> {this.func02()}}>버튼2</button><br/>
//       </div>
//     );
//   }
// }

// export default App;


// ## Eclipse (Java01-Sample.java)
// package pack;

// class Promiss {
// 	Promiss then() {
// 		System.out.println("then call");
// 		return this;
// 	}
// 	void _catch() {
// 		System.out.println("catch call");
// 	}
// }

// class Fetch {
// 	Promiss fetch(String str) {
// 		System.out.println("call");
// 		return new Promiss();
// 	}
// }
// public class Sample {

// 	public static void main(String[] args) {
// 		System.out.println(0731);
// 		Fetch obj = new Fetch();
// 		obj.fetch("https://jsonplaceh")
// 		.then()
// 		.then()
// 		._catch();
// 	}
// }