import { Variants, motion } from 'framer-motion'
import { useUiStore } from '../../../store/uiStore'

const cardVariants: Variants = {
	hidden: { opacity: 0, scale: 0.7 },
	show: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 1.5,
			type: 'spring',
		},
	},
}
const imagen =
	'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FzaW5vfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
export const Card = () => {
	const { changeStateDetail, changeCursorState } = useUiStore()

	//viewport={{once:true}}

	return (
		<motion.div
			onMouseLeave={changeCursorState}
			onMouseEnter={changeCursorState}
			viewport={{ once: true }}
			variants={cardVariants}
			initial='hidden'
			whileInView='show'
			onClick={changeStateDetail}
			className='panel h-2/5 w-[400px]  rounded-lg  bg-[#2c3036] min-w[320px]  flex flex-col justify-around relative px-8 hover:bg-slate-600 group transition-colors duration-200 ease-in overflow-hidden'>
			<img
				src={imagen}
				alt=''
				className='h-full w-full absolute left-0 group-hover:scale-110 duration-300 ease group-hover:rotate-6'
			/>
			<div className='h-full w-full absolute left-0 bg-gradient-to-t from-slate-900  to-transparent group-hover:bg-none transition-all duration-500   '>
				<div className='absolute  bottom-0 left-4 h-full py-4 group-hover:opacity-0 transition-all duration-500'>
					<div className='flex justify-between flex-col h-full'>
						<p className='text-[#ffffff] font-medium bg-red-500 max-w-fit px-2'>
							Evento
						</p>
						<div>
							<p className='text-xl text-white font-bold'>NUEVO BAR DE RAS</p>
							<p className='text-base text-white font-light'>
								Descripc.... Lorem iporemllat temsdsporibus cum!
							</p>
						</div>
					</div>
				</div>

				<div className='absolute -bottom-2 -right-2'>
					<div className='relative w-14 h-14 flex justify-center items-center '>
						<div className='flex justify-center items-center button-float h-2 w-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full  group-hover:w-full group-hover:h-full transition-all duration-200 ease-in '>
              <div className='bg-white w-0 h-0 group-hover:w-5 group-hover:h-[.5px] absolute transition-all duration-300'></div>
              <div className='bg-white w-0 h-0 group-hover:h-5 group-hover:w-[.5px] absolute transition-all duration-300'></div>
            </div>
					</div>
				</div>
			</div>
		</motion.div>
	)
}
