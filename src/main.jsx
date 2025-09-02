import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <App />
  </BrowserRouter>
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