import { motion } from 'framer-motion'
import { FC, RefObject, useRef } from 'react'
import useOverlapDetection from '../hooks/useOverlapDetection'

interface Props {
	containerRef: RefObject<HTMLElement>
}

export const NewAbout: FC<Props> = ({ containerRef }) => {
	const div1Ref = useRef<HTMLDivElement>(null)
	const div2Ref = useRef<HTMLDivElement>(null)
	const isDiv1OnTop = useOverlapDetection(div1Ref, div2Ref, containerRef)

	return (
		<div className='flex z-10 min-w-fit w-fit mx-40' id='about'>
			<div className='h-screen  flex items-center justify-center gap-60  mx-28'>
				<div
					className='min-w-[320px] h-screen  sticky left-0  -z-10 transition-all duration-700 ease'
					style={{ opacity: isDiv1OnTop ? 0.2 : 1 }}
					ref={div1Ref}>
					<motion.img
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 3, ease: 'backInOut' }}
						className='w-full h-full object-cover '
						src='https://img.freepik.com/vector-gratis/ilustracion-realista-juegos-casino_52683-99917.jpg?w=2000'
						alt=''
					/>
				</div>

				<div ref={div2Ref} className='flex gap-60'>
					<motion.div
						initial={{ opacity: 0, translateX: 200 }}
						whileInView={{ opacity: 1, translateX: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 2, ease: 'backInOut' }}
						className='flex flex-col justify-start items-center h-full pt-24'>
						<div>
							<motion.p className='text-6xl text-white font-bold  text-[2.625rem ]  mb-10 '>
								NOSOTROS
							</motion.p>
							<p className='text-[#DDDDDD] font-normal max-w-md text-[1rem] leading-8 selection:bg-orange-700'>
								{' '}
								AAAAA Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Asperiores officiis itaque expedita nulla corrupti autem.
								Asperiores cumque quibusdam est deserunt voluptate impedit
								consequatur illum? Unde, quis illo. Reiciendis, quaerat! Quo.
							</p>
						</div>
					</motion.div>

					<div className='flex flex-col gap-32 py-11'>
						<motion.div
							initial={{ opacity: 0, translateX: 200 }}
							whileInView={{ opacity: 1, translateX: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 2, ease: 'backInOut' }}
							className='w-[500px] '>
							<p className='text-4xl text-white font-bold  text-[2.625rem ]  pb-5'>
								MISIÓN
							</p>
							<p className='text-[#DDDDDD] font-normal max-w-md text-[1rem] leading-8'>
								{' '}
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Asperiores officiis itaque expedita nulla corrupti autem.
								Asperiores cumque quibusdam est deserunt voluptate impedit
								consequatur illum? Unde, quis illo. Reiciendis, quaerat! Quo.
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, translateX: 200 }}
							whileInView={{ opacity: 1, translateX: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 2, ease: 'backInOut' }}>
							<p className='text-4xl text-white font-bold  text-[2.625rem ]  pb-5'>
								VISIÓN
							</p>
							<p className='text-[#DDDDDD] font-normal max-w-md text-[1rem] leading-8 '>
								{' '}
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Asperiores officiis itaque expedita nulla corrupti autem.
								Asperiores cumque quibusdam est deserunt voluptate impedit
								consequatur illum? Unde, quis illo. Reiciendis, quaerat! Quo.
							</p>
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	)
}
