import { useRef } from 'react'
import video from '../../../assets/video.mp4'
import { motion,
    //  useScroll, useTransform 
    } from 'framer-motion'



export const VideoBackGround = () => {

    const containerRef = useRef(null)
    
	return (
		<div className=' h-screen flex justify-end items-center' ref={containerRef}>
            <div className='bg-gradient-to-l from-slate-950  to-transparent h-screen w-screen absolute left-0 z-10'>

            </div>
            <motion.video autoPlay loop muted className='h-screen w-screen object-cover  z-0' 
            >
			<source src={video} type='video/mp4' />
            </motion.video>
			
        </div>
	)
}
