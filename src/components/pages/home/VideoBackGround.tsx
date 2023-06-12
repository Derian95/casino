import { useRef } from 'react'
import { motion,
    //  useScroll, useTransform 
    } from 'framer-motion'
import { dataStore } from '../../../store/dataStore'



export const VideoBackGround = () => {

    const containerRef = useRef(null)
    const {casinoInfo} = dataStore()
	return (
		<div className=' h-screen w-screen flex justify-end items-center' ref={containerRef}>
            <div className='bg-gradient-to-r from-slate-950  to-transparent h-screen w-screen absolute left-0 z-10'>

            </div>
            <motion.video autoPlay loop muted className='h-screen w-screen object-cover  z-0' 
            >
			<source src={casinoInfo?.promotionalVideoPath} type='video/mp4'  />
            </motion.video>
			
        </div>
	)
}
