import { motion,
    //  useInView,
      useMotionValue } from 'framer-motion'
import { useEffect, useRef
    // , useState 
} from 'react'
import { Home } from '../pages/Home'
import { Contact } from '../pages/Contact'
import { SideBar } from '../components/ui/SideBar'
import { NewAbout } from '../pages/NewAbout'
import { NewEvents } from '../pages/NewEvents'
import { Loader } from '../components/ui/Loader'
import { Detail } from '../components/pages/anunciament/Detail'
import { useUiStore } from '../store/uiStore'
import { Equalizer } from '../components/ui/Equalizer'
import image from '../assets/ra.jpg'
export const Test5 = () => {
	const scrollContainerRef = useRef<HTMLDivElement>(null)
	const { cursorStyle, cursorStyleDetail } = useUiStore()
	//const scrollContainer = useRef<HTMLDivElement>(null)

	// const size = useWindowSize()
	// const ref = useRef(null)
	// const isInView = useInView(ref, { once: true })

	useEffect(() => {
		const scrollContainer = scrollContainerRef.current
		if (!scrollContainer) return

		const handleWheel = (evt: WheelEvent) => {
			evt.preventDefault()
			scrollContainer.scrollLeft += evt.deltaY * 2.4
		}

		scrollContainer.addEventListener('wheel', handleWheel)

		return () => {
			scrollContainer.removeEventListener('wheel', handleWheel)
		}
	}, [])

	const cursorX = useMotionValue(-100)
	const cursorY = useMotionValue(-1000)

	useEffect(() => {
		const moveCursor = (e: any) => {
			cursorX.set(e.clientX - 6)
			cursorY.set(e.clientY - 6)
		}
		window.addEventListener('mousemove', moveCursor)
		return () => {
			window.removeEventListener('mousemove', moveCursor)
		}
	}, [])
	return (
		<div
			className= {`flex   bg-gray-950 h-[100vh] overflow-x-hidden `} 
			ref={scrollContainerRef}>
                <img src={image} alt="" className='h-screen w-screen fixed z-[0] object-cover' />
                <div className='fixed h-screen w-screen z-0 bg-gradient-to-r from-slate-900 to-slate-950/95'></div>
			<motion.div
				className={`${cursorStyle ? 'cursorHover ' : ''} ${
					cursorStyleDetail ? 'cursorHoverText' : ''
				} cursor z-50 bg-red-600`}
				style={{
					translateX: cursorX,
					translateY: cursorY,
				}}></motion.div>
			<Equalizer />
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
