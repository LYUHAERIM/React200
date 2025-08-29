import React, { Component } from 'react';

class Bpp extends Component {
  render() {
    console.log(this.props.num);
    
    return (
      <div>
        <p>Cpp</p>
        <p>{this.props.num}</p>
      </div>
    );
  }
}

export default Bpp;