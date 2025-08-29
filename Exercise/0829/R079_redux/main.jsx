import { createRoot } from 'react-dom/client'
import './index.css'
import App, {reducer} from './App.jsx'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

//const store = createStore(reducer);
const store = configureStore({reducer:reducer});

// 1. npm install redux
// 2. npm install react-redux
// 3. npm install @reduxjs/toolkit
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)



/*
// 백업 데이터
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <App />
)
*/