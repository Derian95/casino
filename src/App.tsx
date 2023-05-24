import { useEffect, useRef } from 'react'
import { Detail } from './components/pages/anunciament/Detail'
import { SideBar } from './components/ui/SideBar'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { NewAbout } from './pages/NewAbout'
import { NewEvents } from './pages/NewEvents'

import image from './assets/ra.jpg'

export const App = () => {

	const boxScrollRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleMouseWheel = (e: WheelEvent) => {
			const race = 400 // How many pixels to scroll

			if (e.deltaY > 0) {
				// Scroll right
				if (boxScrollRef.current) {
					boxScrollRef.current.scrollLeft += race
				}
			} else {
				// Scroll left
				if (boxScrollRef.current) {
					boxScrollRef.current.scrollLeft -= race
				}
			}
			e.preventDefault()
		}

		const boxScrollElement = boxScrollRef.current

		if (boxScrollElement) {
			boxScrollElement.addEventListener('wheel', handleMouseWheel)
		}

		return () => {
			if (boxScrollElement) {
				boxScrollElement.removeEventListener('wheel', handleMouseWheel)
			}
		}
	}, [])

	return (
		<div className='flex flex-nowrap max-w-[100vw] h-[100vh] overflow-y-hidden container-app bg-gray-950 ' ref={boxScrollRef}>
		<img src={image} alt="" className='h-screen w-screen fixed z-[0] object-cover' />
        <div className='fixed h-screen w-screen z-0 bg-gradient-to-r from-slate-900 to-slate-950/95'></div>
			<SideBar />
			<Home />
			<NewAbout containerRef={boxScrollRef} />
			<NewEvents containerRef={boxScrollRef} />
			<Contact />
			<Detail />
		</div>
	)
}
