import { motion } from "framer-motion"
import { Card } from "../components/pages/anunciament/Card"

export const NewEvents = () => {
  return (
    <div className="h-screen w-auto flex justify-start  items-center gap-8  flex-nowrap relative" id="events">
      <div className='sticky left-0 flex w-80 h-screen '>
					<motion.img
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 3, ease: 'backInOut' }}
						className='w-80 h-screen object-cover '
						src='https://img.freepik.com/vector-gratis/ilustracion-realista-juegos-casino_52683-99917.jpg?w=2000'
						alt=''
					/>
				</div>
       <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
  )
}
