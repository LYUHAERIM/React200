import React, { Component } from 'react';

class App extends Component {
  f01(e) {
    console.log(1);
    let element = document.getElementById('tiger');
    console.log(element.value);
    
    // axios.get('주소', {ele:element}).then()

    // 리프레시 방지 함수
    e.preventDefault();
    
  }

  render() {
    return (
      <div>
        <button onClick={()=> {this.f01()}}>버튼1</button><br/>
        <form onSubmit={(e)=>{this.f01(e)}}>
          닉네임 : <input type='text' id='tiger'/><br/>
          비밀번호 : <input type='text'/><br/>
          <input type='submit'/><br/>
        </form>
      </div>
    );
  }
}

export default App;