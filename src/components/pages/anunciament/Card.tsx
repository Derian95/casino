
import { Variants, motion} from 'framer-motion'

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
export const Card = () => {

  const onClick2=() => {
    console.log("click")
  }
  //viewport={{once:true}}
  return (
    <motion.div variants={cardVariants} initial="hidden" whileInView="show"  onClick={onClick2}  className="panel  rounded-lg h-72 sm:h-52 bg-[#2c3036] flex flex-col justify-around relative px-8 hover:bg-slate-600 group transition-colors duration-200 ease-in">
        <p className="text-[#798baa]">Evento</p>
        <p className="text-xl text-white font-bold">NUEVO BAR DE RAS</p>
        <p className="text-base text-white font-light">Descripc....</p>
        <div className="h-2 w-2 bg-slate-500 rounded-full absolute right-2 bottom-2 group-hover:w-14 group-hover:h-14 transition-all duration-200 ease-in"></div>
        
    </motion.div>
  )
}
