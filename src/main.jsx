import {BrowserRouter, Route , Routes} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import Store from './Redux/Store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <BrowserRouter>
      <Routes>
        <Route path='/Counter' element={ <App />}/>
      </Routes>
  </BrowserRouter>
  </Provider>
)
