import React, { Component } from 'react';

class Bpp extends Component {
  render() {
    console.log(this.props.num);
    
    return (
      <div>
        <p>Bpp</p>
        <button onClick={this.props.onInc}>증가</button><br/>
        <button onClick={this.props.onDec}>감소</button><br/>
        <p>{this.props.num}</p>
      </div>
    );
  }
}

export default Bpp;