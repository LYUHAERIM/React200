import { createRoot } from 'react-dom/client'
import './index.css'
import App, {reducer} from './App.jsx'
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(reducer);

// npm install redux
// npm install react-redux
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