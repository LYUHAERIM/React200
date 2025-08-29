import { connect } from 'react-redux';
import Cpp from '../components/Cpp';

// S
const stateToProps = (state)=>{
  console.log('StateToProps', state);
  return { num:state.num };
}

export default connect(
  stateToProps,
  null
)(Cpp);