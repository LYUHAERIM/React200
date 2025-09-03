import { Component } from "react";
import Footer from './Footer';
import Header from './Header admin';
import './css/new.css';
import { Route, Routes } from "react-router-dom";
import LoginForm from './LoginForm';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  { 군구: '광진구', 유동인구수: 32760, 비유동인구수: 34000 },
  { 군구: '동대문구', 유동인구수: 30480, 비유동인구수: 56000 },
  { 군구: '마포구', 유동인구수: 27250, 비유동인구수: 23000 },
  { 군구: '구로구', 유동인구수: 49870, 비유동인구수: 67000 },
  { 군구: '강남구', 유동인구수: 51420, 비유동인구수: 55000 },
];

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/floatPopulationList" element={<FloatingPopulationList />} />
          <Route path="/rechartSimpleLineChart" element={<RechartSimpleLineChart />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

class RechartSimpleLineChart extends Component {
  

  render() {
    return (
      <LineChart
        width={1000}
        height={300}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        {/* 내부 점선 격자 선 길이 : 4 */}
        {/* 내부 점선 격자 공백길이 : 3 */}
        <CartesianGrid strokeDasharray="4 3" />
        {/* X축의 기준 키값 설정 */}
        <XAxis dataKey="군구" /><YAxis />
        {/* 마우스 이동시 정보 표시 */}
        <Tooltip />
        {/* 범례 표시 */}
        <Legend />
        {/* activeDot : 마우스 이동시 표시되는 원의 크기 설정 */}
        <Line type="monotone" dataKey="유동인구수" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="비유동인구수" stroke="#82ca9d" />
      </LineChart>
    );
  }
}

class FloatingPopulationList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      append_FPList: [],
    }
  }

  componentDidMount() {
    this.f1();
  }

  f1 = () => {
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
    let jsonString = JSON.stringify(obj);
    jsonString = jsonString.replace(/\(1시간단위\)/g, ''); // 정규표현식
    jsonString = jsonString.replace(/\(10세단위\)/g, '');

    let json = JSON.parse(jsonString)
    let result = [];

    for (let i = 0; i < json.length; i++) {
      let idx = i + 1;
      let data = json[i];
      result.push(
        <tr key={idx} className="hidden_type">
          <td>{idx}</td>
          <td>{data.일자}</td>
          <td>{data.시간}</td>
          <td>{data.연령대}</td>
          <td>{data.성별}</td>
          <td>{data.시}</td>
          <td>{data.군구}</td>
          <td>{data.유동인구수}</td>
        </tr>);
    }
    this.setState({ append_FPList: result });
  }

  render() {
    return (
      <>
        <button onClick={this.f1}>버튼</button>

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

                <tbody>
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