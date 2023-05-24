import { FC, RefObject, useRef } from 'react'
import { motion } from 'framer-motion'
import { Card } from '../components/pages/anunciament/Card'
import useOverlapDetection from '../hooks/useOverlapDetection'

interface Props {
	containerRef: RefObject<HTMLElement>
}
export const NewEvents: FC<Props> = ({ containerRef }) => {
	const div1Ref = useRef<HTMLDivElement>(null)
	const div2Ref = useRef<HTMLDivElement>(null)
	const isDiv1OnTop = useOverlapDetection(div1Ref, div2Ref, containerRef)

	return (
		<div className='h-screen w-auto flex' id='events'>
			<div className='w-80 h-screen object-cover sticky left-0 transition-opacity duration-300 ease-in' ref={div1Ref} style={{opacity:isDiv1OnTop?.5:1}}>
				<motion.img
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 3, ease: 'backInOut' }}
					className='w-full h-full object-cover'
          
					src='https://img.freepik.com/vector-gratis/ilustracion-realista-juegos-casino_52683-99917.jpg?w=2000'
					alt=''
				/>
			</div>
			<div className='flex justify-start  items-center gap-8  flex-nowrap ml-96' ref={div2Ref}>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	)
}
