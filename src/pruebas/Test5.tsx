import { motion, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { Home } from '../pages/Home'
import { Contact } from '../pages/Contact'
import { SideBar } from '../components/ui/SideBar'
import { NewAbout } from '../pages/NewAbout'
import { NewEvents } from '../pages/NewEvents'
import { Loader } from '../components/ui/Loader'
import { Detail } from '../components/pages/anunciament/Detail'
import useWindowSize from '../hooks/useWidth'

export const Test5 = () => {
	const scrollContainerRef = useRef<HTMLDivElement>(null)
	//const scrollContainer = useRef<HTMLDivElement>(null)

	// const size = useWindowSize()
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true })

	useEffect(() => {
		const scrollContainer = scrollContainerRef.current
		if (!scrollContainer) return

		const handleWheel = (evt: WheelEvent) => {
			evt.preventDefault()
			scrollContainer.scrollLeft += evt.deltaY 
		}

		scrollContainer.addEventListener('wheel', handleWheel)

		return () => {
			scrollContainer.removeEventListener('wheel', handleWheel)
		}
	}, [])

	return (
		<div
			className=' flex   bg-gray-950 h-[100vh] overflow-x-hidden '
			ref={scrollContainerRef}>
			<Loader />
			<SideBar />
			<Home />
			<NewAbout />
			<NewEvents />
			<Contact />
			<Detail />
			{/* <div ref={ref} className='min-w-[60vw] h-screen bg-green-600'>
				<motion.div
					style={{
						transform: isInView ? 'none' : 'translateX(-200px)',
						opacity: isInView ? 1 : 0,
						transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
					}}>
					sdasd
				</motion.div>{' '}
			</div> */}
		</div>
	)
}
