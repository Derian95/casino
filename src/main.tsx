import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.tsx'
import './index.css'
import { Loader } from './components/ui/Loader.tsx'
// import { Text3 } from './pruebas/Text3.tsx'
import { Text2 } from './pruebas/Text2.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      {/* <App/> */}
      {/* <Loader/> */}
      <Text2/>

  </React.StrictMode>,
)
