import { useRef } from 'react'
import video from '../../../assets/video.mp4'
import { motion, useScroll, useTransform } from 'framer-motion'



export const VideoBackGround = () => {

    const containerRef = useRef(null)
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['end end', 'end start'],
	})
	const opacity = useTransform(scrollYProgress, [0, 1], [.6, 0])
	const scale = useTransform(scrollYProgress, [0, 1], [1, 3])
    
	return (
		<div className=' h-screen flex justify-end items-center' ref={containerRef}>
            <motion.video autoPlay loop muted className='h-screen w-screen object-cover  z-0' style={{opacity, scale}}>
			<source src={video} type='video/mp4' />
            </motion.video>
			<div className='fixed text-white z-[25] w-[0.1px] h-2/5 right-10 bg-white '>
			</div>
        </div>
	)
}
