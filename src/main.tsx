import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.tsx'
import './index.css'
// import { Loader } from './components/ui/Loader.tsx'
// import { Text3 } from './pruebas/Text3.tsx'
import { Test5 } from './pruebas/Test5.tsx'
import { Test6 } from './pruebas/Test6.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		{/* <App/> */}
		{/* <Loader/> */}
		<Test6/>
		{/* <div className="wrapper">
		<div className="swipe">
		<h1>Derian</h1>
		</div>
		<div className="swipe swipe--delay">
		<h3>Front-end Developer</h3>
		</div>
		</div> */}

		{/* <div className='h-screen w-screen bg-red-300 bg-[url("https://images.pexels.com/photos/1871508/pexels-photo-1871508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")]'>

  </div> */}
	</React.StrictMode>
)
