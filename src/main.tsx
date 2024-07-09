import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './my-tailwind.css'
import {myStore} from '../src/rtk/store.tsx'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={myStore}>

    <App />
    </Provider>
  </React.StrictMode>,
)
