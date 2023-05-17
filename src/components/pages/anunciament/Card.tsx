
import { Variants, motion} from 'framer-motion'
import { useUiStore } from '../../../store/uiStore'

const cardVariants:Variants={
  hidden: { opacity: 0, scale: 0.7 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.5,
      type: "spring",
      
    }
  }
}
const imagen ='https://images.unsplash.com/photo-1596838132731-3301c3fd4317?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FzaW5vfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
export const Card = () => {
  const { changeStateDetail } = useUiStore()
  

  //viewport={{once:true}}

  return (
    <motion.div  variants={cardVariants} initial="hidden" whileInView="show"  onClick={changeStateDetail}  className="panel h-[500px] w-[500px]  rounded-lg  bg-[#2c3036] min-w[320px]  flex flex-col justify-around relative px-8 hover:bg-slate-600 group transition-colors duration-200 ease-in overflow-hidden">
        <img src={imagen} alt="" className='h-full w-full absolute left-0 group-hover:scale-110 duration-300 ease'/>
        <div className='h-full w-full absolute left-0 bg-gray-900 group-hover:bg-transparent transition-colors duration-300 ease'>
        <div className='absolute'>
          <p className="text-[#798baa]">Evento</p>
          <p className="text-xl text-white font-bold">NUEVO BAR DE RAS</p>
          <p className="text-base text-white font-light">Descripc....</p>
        </div>
       
       
        <div className="h-2 w-2 bg-slate-500 rounded-full absolute right-2 bottom-2 group-hover:w-14 group-hover:h-14 transition-all duration-200 ease-in"></div>
        

        </div>
        
    </motion.div>
  )
}
