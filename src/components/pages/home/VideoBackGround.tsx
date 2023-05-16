import { useRef } from 'react'
import video from '../../../assets/video.mp4'
import { motion, useScroll, useTransform } from 'framer-motion'



export const VideoBackGround = () => {

    const containerRef = useRef(null)
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['end end', 'end start'],
	})
	const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
	const scale = useTransform(scrollYProgress, [0, 1], [1, 3])
    
	return (
		<div className='w-screen h-screen' ref={containerRef}>
            <motion.video autoPlay loop muted className='h-screen w-screen object-cover fixed z-0' style={{opacity, scale}}>
			<source src={video} type='video/mp4' />
            </motion.video>
        </div>
	)
}
