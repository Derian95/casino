import {  useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { VideoBackGround } from '../components/pages/home/VideoBackGround'

export const Home = () => {
	const containerRef = useRef(null)
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['end end', 'end start'],
	})
    
	const scale = useTransform(scrollYProgress, [0,1], [1,0.5])
	
	return (
		<div className='relative min-w-[100vw] h-screen ' ref={containerRef} id='home'>
			<div className=' sm:pl-[68px] h-screen  flex items-center z-20 absolute '>
				<div className='h-1/4 w-auto  pl-10 flex flex-col  justify-between'>
					<motion.h1  className='salaName sm:text-5xl md:text-6xl lg:text-7xl text-4xl font-black text-white  translate-y-10' style={{scale}}>
						DAMASCO
					</motion.h1>
					<motion.p className='address text-white z-0 ' style={{scale}}>Direcion Lorem ipsum dolor</motion.p>
				</div>
				
			</div>

            <VideoBackGround/>
			
			
		</div>
	)
}
