import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { inc, dec } from '../modules/bpp';
import Bpp from '../components/Bpp';

// D
const dispatchToProps = dispatch => bindActionCreators({
  onInc: inc,
  onDec: dec
} , dispatch);

// S
const stateToProps = (state)=>{
  console.log('StateToProps', state);
  return { num:state.num };
}

export default connect(
  stateToProps,
  dispatchToProps
)(Bpp);