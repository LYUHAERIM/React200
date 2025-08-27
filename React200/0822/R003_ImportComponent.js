import React, { Component } from 'react';

// 부품이름은 App
class App extends Component {
  render() {
    return (
      <div>
        <Bpp/>
        <P>호랑이</P>
        <Bpp/>
        <Cpp/>
      </div>
    );
  }
}

// Bpp 컴포넌트
class Bpp extends Component {
  render() {
    return (
      <div>
        <p>코끼리</p>
        <Cpp/>
      </div>
    );
  }
}

// Cpp 컴포넌트
class Cpp extends Component {
  render() {
    return (
      <div>
        <p>독수리</p>
      </div>
    );
  }
}

export default App;


// src 폴더에 Bpp.jsx 파일 생성

// # Bpp.jsx
// import React, { Component } from 'react';

// class Bpp extends Component {
//     render() {
//         return (
//             <div>
//                 <p>부품1</p>
//                 <Cpp/>
//             </div>
//         );
//     }
// }

// class Cpp extends Component {
//     render() {
//         return (
//             <div>
//                 <p>부품2</p>
//             </div>
//         );
//     }
// }
// export default Bpp;



// # App.jsx
// import React, { Component } from 'react';
// import Bpp from './Bpp';

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <p>호랑이</p>
//         <Bpp/>
//       </div>
//     );
//   }
// }

// export default App;



// <Bpp/> 해주고 Ctrl + Space 하면 자동 import 


// Bpp.jsx 에 있는 Cpp를 쓰려면
// 외부에서 사용하기위해 export 해줘야한다

// # Bpp.jsx
// import React, { Component } from 'react';

// class Bpp extends Component {
//     render() {
//         return (
//             <div>
//                 <p>부품1</p>
//                 <Cpp/>
//             </div>
//         );
//     }
// }

// export class Cpp extends Component {
//     render() {
//         return (
//             <div>
//                 <p>부품2</p>
//             </div>
//         );
//     }
// }
// export default Bpp;


// # App.jsx
// import React, { Component } from 'react';
// import Bpp, {Cpp} from './Bpp';

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <p>호랑이</p>
//         <Bpp/>
//         <Cpp/>
//       </div>
//     );
//   }
// }

// export default App;
