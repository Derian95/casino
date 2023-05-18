import { motion } from 'framer-motion'

export const NewAbout = () => {
	

	return (
		<div className='flex' id='about' >
			<div className='h-screen min-w-[100vw] flex items-center justify-center gap-14 '>
				<motion.div 
                  initial={{opacity:0, translateX:200}}
                  whileInView={{opacity:1, translateX:0}}
                  viewport={{once:true}}
                  transition={{duration:2, ease:'backInOut'}}
                >
					<p className='text-5xl text-white font-bold  text-[2.625rem ]  mb-10'>NOSOTROS</p>
					<p className='text-[#DDDDDD] font-normal max-w-md text-[0.875rem] '>
						{' '}
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
						officiis itaque expedita nulla corrupti autem. Asperiores cumque
						quibusdam est deserunt voluptate impedit consequatur illum? Unde,
						quis illo. Reiciendis, quaerat! Quo.
					</p>
				</motion.div>

				<motion.img
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    viewport={{once:true}}
                    transition={{duration:3, ease:'backInOut'}}
					className='w-80 h-screen object-cover'
					src='https://img.freepik.com/vector-gratis/ilustracion-realista-juegos-casino_52683-99917.jpg?w=2000'
					alt=''
				/>
			</div>
			<div className='h-screen min-w-[100vw] flex items-center justify-center gap-14 '>
            <motion.div 
                  initial={{opacity:0, translateX:200}}
                  whileInView={{opacity:1, translateX:0}}
                  viewport={{once:true}}
                  transition={{duration:2, ease:'backInOut'}}
                >
					<p className='text-5xl text-white font-bold  text-[2.625rem ]  mb-10'>NOSOTROS</p>
					<p className='text-[#DDDDDD] font-normal max-w-md text-[0.875rem] '>
						{' '}
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
						officiis itaque expedita nulla corrupti autem. Asperiores cumque
						quibusdam est deserunt voluptate impedit consequatur illum? Unde,
						quis illo. Reiciendis, quaerat! Quo.
					</p>
				</motion.div>

				<motion.img
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    viewport={{once:true}}
                    transition={{duration:3, ease:'backInOut'}}
					className='w-80 h-screen object-cover'
					src='https://img.freepik.com/vector-gratis/ilustracion-realista-juegos-casino_52683-99917.jpg?w=2000'
					alt=''
				/>
			</div>
			<div className='h-screen min-w-[100vw] flex items-center justify-center gap-14 '>
            <motion.div 
                  initial={{opacity:0, translateX:200}}
                  whileInView={{opacity:1, translateX:0}}
                  viewport={{once:true}}
                  transition={{duration:2, ease:'backInOut'}}
                >
					<p className='text-5xl text-white font-bold  text-[2.625rem ]  mb-10'>NOSOTROS</p>
					<p className='text-[#DDDDDD] font-normal max-w-md text-[0.875rem] '>
						{' '}
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
						officiis itaque expedita nulla corrupti autem. Asperiores cumque
						quibusdam est deserunt voluptate impedit consequatur illum? Unde,
						quis illo. Reiciendis, quaerat! Quo.
					</p>
				</motion.div>

				<motion.img
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    viewport={{once:true}}
                    transition={{duration:3, ease:'backInOut'}}
					className='w-80 h-screen object-cover'
					src='https://img.freepik.com/vector-gratis/ilustracion-realista-juegos-casino_52683-99917.jpg?w=2000'
					alt=''
				/>
			</div>
		</div>
	)
}
