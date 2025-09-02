import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      append_FPList: [],
    };
  }

  f01 = () => {
    console.log(1);
    axios.get('https://jsonplaceholder.typicode.com/albums')
      .then((res) => {
        let tmp = [];
        console.log(res.data.length);
        for (let i = 0; i < res.data.length; i++) {
          tmp.push(
            <tr key={i}>
              <td>{res.data[i].userId}</td>
              <td>{res.data[i].id}</td>
              <td>{res.data[i].title}</td>
            </tr>
          );
        }
        this.setState({ result: tmp });
      });
  }

  render() {
    return (
      <div>
        <p>App</p>
        <button onClick={() => { this.f01() }}>버튼1</button><br />
        <table border={1}>
          <tbody>
            {this.state.result}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;