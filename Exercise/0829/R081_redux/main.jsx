import { createRoot } from 'react-dom/client'
import './index.css'
import App, {reducer} from './App.jsx'
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({reducer:reducer});

createRoot(document.getElementById('root')).render(
  <Provider store={store}>  
    <App/>
  </Provider>
)

// const listener = ()=> {
//   createRoot(document.getElementById('root')).render(
//     <Provider store={store}>
//       <App />
//     </Provider>
//   )
// }

// const listener = ()=> {
//   createRoot(document.getElementById('root')).render(
//     <App store={store}/>
//   )
// }

// store.subscribe(listener);
// listener();

/*
// 백업 데이터
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <App />
)
*/