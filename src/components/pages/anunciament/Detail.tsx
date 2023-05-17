



import { useState } from "react";
import { useUiStore } from "../../../store/uiStore"
import { motion, AnimatePresence } from "framer-motion"



const images=[
    'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FzaW5vfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    'https://i0.wp.com/www.completesports.com/wp-content/uploads/Casino-Games.jpg?fit=754%2C424&ssl=1&is-pending-load=1',
    'https://media.istockphoto.com/id/1158005632/es/foto/el-crupier-sostiene-una-bola-de-ruleta-en-un-casino-en-la-mano.jpg?s=612x612&w=0&k=20&c=8oruAF1PQdov8bHkHcKSuI2dRz6tcuKIlibwNgVY_qc='
]


const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      };
    }
  };

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};
export const Detail = () => {
const [[page, direction], setPage] = useState([0, 0]);
    const { showDetail, changeStateDetail } = useUiStore()


    const paginate = (newDirection: number) => {
      setPage([page + newDirection, newDirection]);
    };
  return (
    <div className={`fixed bg-slate-900 h-[200vh] w-screen z-40 transition-all duration-500 ease-in-out ${ showDetail ? 'translate-y-0' : 'translate-y-full'}`} onClick={ changeStateDetail }>
        <AnimatePresence>
        <motion.img
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
        </AnimatePresence>
    </div>
  )
}
