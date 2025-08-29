import { createAction, handleActions } from 'redux-actions';

export const INC = 'INC';
export const DEC = 'DEC';

// export const inc = ()=> ({type:INC});
// export const dec = ()=> ({type:DEC});
export const inc = createAction(INC);
export const dec = createAction(DEC);

const initState = { 
  num: 100, 
}

// R
export const reducer = handleActions({
  [INC]:(state, action)=> ({ num:state.num+1, action }),
  [DEC]:(state, action)=> ({ num:state.num-1, action }),
}, initState);

export default reducer;