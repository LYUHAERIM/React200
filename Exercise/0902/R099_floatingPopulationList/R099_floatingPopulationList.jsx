import React, { Component } from 'react';
import './CSS/new.css';

class App extends Component {
  f01() {
    console.log(1);

    // 받았다고 치고 = axios("")
    // Data = {}
  }
  render() {
    return (
      <div>
        <p>App</p>

        <FloatingPopulationList />
      </div>
    );
  }
}

class FloatingPopulationList extends Component {
  constructor() {
    super();
    this.state = {
      append_FPList: [],
    };
  }

  f01() {
    console.log(1);
    // axios에서 받은 데이터
    let obj = [
      {
        일자: 20191101, 시간: '00(1시간단위)', 연령대: '40(10세단위)',
        성별: '여성', 시: '서울', 군구: '영등포구', 유동인구수: 32670,
      },
      {
        일자: 20191101, 시간: '00(1시간단위)', 연령대: '50(10세단위)',
        성별: '여성', 시: '서울', 군구: '구로구', 유동인구수: 37870,
      },
      {
        일자: 20191101, 시간: '01(1시간단위)', 연령대: '30(10세단위)',
        성별: '남성', 시: '서울', 군구: '영등포구', 유동인구수: 38410,
      },
      {
        일자: 20191101, 시간: '01(1시간단위)', 연령대: '50(10세단위)',
        성별: '여성', 시: '서울', 군구: '동대문구', 유동인구수: 28530,
      },
      {
        일자: 20191101, 시간: '01(1시간단위)', 연령대: '50(10세단위)',
        성별: '여성', 시: '서울', 군구: '서초구', 유동인구수: 31830,
      },
      {
        일자: 20191101, 시간: '03(1시간단위)', 연령대: '30(10세단위)',
        성별: '남성', 시: '서울', 군구: '성동구', 유동인구수: 25520,
      },
      {
        일자: 20191101, 시간: '03(1시간단위)', 연령대: '40(10세단위)',
        성별: '남성', 시: '서울', 군구: '서초구', 유동인구수: 37360,
      },
      {
        일자: 20191101, 시간: '04(1시간단위)', 연령대: '50(10세단위)',
        성별: '여성', 시: '서울', 군구: '성북구', 유동인구수: 35190,
      },
    ];
    let json = JSON.stringify(obj);
    console.log('타입확인:', typeof json, typeof obj);
    json = json.replace(/\(1시간단위\)/g, '');
    json = json.replace(/\(10세위\)/g, '');
    json = JSON.parse(json);
    console.log('첫 데이터:', json[0], json.length);
    let result = [];

    for (let i = 0; i < json.length; i++) {
      let data = json[i];
      result.push(
        <tr key={i + 1}>
          <td>{i + 1}</td>
          <td>{data.일자}</td>
          <td>{data.시간}</td>
          <td>{data.연령대}</td>
          <td>{data.성별}</td>
          <td>{data.시}</td>
          <td>{data.군구}</td>
          <td>{data.유동인구수}</td>
        </tr>
      );
    }
    this.setState({
      append_FPList: result,
    });
  }

  render() {
    return (
      <>
        <button onClick={() => { this.f01() }}>버튼1</button><br />
        <section className="sub_wrap" >
          <article className="s_cnt mp_pro_li ct1 mp_pro_li_admin">
            <div className="li_top">
              <h2 className="s_tit1">서울시 유동인구 데이터 - 19년 11월</h2>
            </div>
            <div className="list_cont list_cont_admin">
              <table className="table_ty1 fp_tlist">
                <thead>
                  <tr>
                    <th>Row</th>
                    <th>일자</th>
                    <th>시간</th>
                    <th>연령대</th>
                    <th>성별</th>
                    <th>시</th>
                    <th>군구</th>
                    <th>유동인구수</th>
                  </tr>
                </thead>
              </table>
              <table className="table_ty2 fp_tlist">
                <tbody>
                  {/* {} 이 부분에 state가 들어간다 */}
                  {this.state.append_FPList}
                </tbody>
              </table>
            </div>
          </article>
        </section>
      </>
    );
  }
}


export default App;