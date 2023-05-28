import { useEffect, useRef } from 'react'
import { Detail } from './components/pages/anunciament/Detail'
import { SideBar } from './components/ui/SideBar'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { NewAbout } from './pages/NewAbout'
import { NewEvents } from './pages/NewEvents'
import useMouseWheelScroll from './hooks/useMouseWheelScroll '

import image from './assets/ra.jpg'

export const App = () => {

	const boxScrollRef = useRef<HTMLDivElement>(null)
	useMouseWheelScroll(boxScrollRef);


	return (
		<div className='flex flex-nowrap max-w-[100vw] h-[100vh] overflow-y-hidden container-app bg-gray-950 ' ref={boxScrollRef}>
		<img src={image} alt="" className='h-screen w-screen fixed z-[0] object-cover' />
        <div className='fixed h-screen w-screen z-0 bg-gradient-to-r from-slate-900 to-slate-950/95'></div>
			<SideBar />
			<Home />
			<NewAbout containerRef={boxScrollRef} />
			<NewEvents containerRef={boxScrollRef} />
			<Contact containerRef={boxScrollRef}/>
			<Detail />
		</div>
	)
}
