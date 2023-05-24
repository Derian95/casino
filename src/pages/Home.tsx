import { useEffect, useRef, useState } from 'react'

import { motion, useScroll, useTransform } from 'framer-motion'
import { VideoBackGround } from '../components/pages/home/VideoBackGround'
import axios from 'axios'

export const Home = () => {
    // const [title, setTitle] = useState('')
	const containerRef = useRef(null)
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['end end', 'end start'],
	})
    
	const scale = useTransform(scrollYProgress, [0,1], [1,0.5])
	// const test = async () => {
	// 	const {data} = await axios.get('http://192.168.1.32:9998/api/casino/1',{
	// 	  headers:{
	// 		  'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZFVzZXIiOiIxIiwiTmFtZSI6IkRlcmlhbiBGcmFuY3Vpc2NvIiwiUGF0ZXJuYWxMYXN0bmFtZSI6IkhlcnJlcmEiLCJNYXRlcm5hbExhc3RuYW1lIjoiQW1lenF1aXRhIiwiRW1haWwiOiJkZXJpYW5kYXJAZ21haWwuY29tIiwiUGhvbmVOdW1iZXIiOiI5NTE1OTE5NTEiLCJVc2VybmFtZSI6ImRlcmlhbiIsIlN0YXRlIjoiVHJ1ZSIsIklkUm9sZSI6IjEiLCJSb2xlTmFtZSI6IkFkbWluaXN0cmFkb3IiLCJleHAiOjE2ODQ3ODE1MDIsImlzcyI6Imh0dHBzOi8vY2hhbm8uYXp1cmVzd2Vic2l0ZS5uZXQiLCJhdWQiOiJodHRwczovL2NoYW5vLmF6dXJlc3dlYnNpdGUubmV0In0.Clp1VPLatu-lyF33GoCjOXN3UqvDsBVCAk0-qpf1gbU'
	// 	  }
	// 	})
  
	// 	console.log(data.data)
	// 	 setTitle(data.data.name)
	//   }
	// useEffect(() => {
	// 	test()
	// }, [])
	
	
	return (
		<div className='relative min-w-[100vw] h-screen ' ref={containerRef} id='home'>
			<div className=' sm:pl-[68px] h-screen  flex items-center z-20 absolute '>
				<div className='h-1/4 w-auto  pl-10 flex flex-col  justify-between'>
					<motion.h1  className='salaName sm:text-5xl md:text-6xl lg:text-7xl text-4xl font-black text-white  translate-y-10' style={{scale}}>
						{'title'}
					</motion.h1>
					<motion.p className='address text-white z-0 ' style={{scale}}>Direcion Lorem ipsum dolor</motion.p>
				</div>
				
			</div>

            <VideoBackGround/>
			
			
		</div>
	)
}
