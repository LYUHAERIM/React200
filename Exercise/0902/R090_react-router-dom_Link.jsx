import React, { Component } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <p>App</p>
        <Link to={'/'}>Bpp페이지</Link><br/>
        <Link to={'/cpp'}>Cpp페이지</Link><br/>
        <Link to={'/dpp'}>Dpp페이지</Link><br/>
        <Routes>
          {/* 웹 주소창에 기본 주소를 사용하면 Bpp 컴포넌트로 가시오 */}
          <Route path='/' element={<Bpp/>} />
          <Route path='/cpp' element={<Cpp/>} />
        </Routes>
      </div>
    );
  }
}

class Bpp extends Component {
  render() {
    return (
      <div>
        <p>Bpp</p>
      </div>
    );
  }
}

class Cpp extends Component {
  render() {
    return (
      <div>
        <p>Cpp</p>
      </div>
    );
  }
}

export default App;