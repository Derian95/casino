import { motion, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { Home } from '../pages/Home'
import { Contact } from '../pages/Contact'
import { SideBar } from '../components/ui/SideBar'
import { NewAbout } from '../pages/NewAbout'
import { NewEvents } from '../pages/NewEvents'
import { Loader } from '../components/ui/Loader'
import { Detail } from '../components/pages/anunciament/Detail'
import useWindowSize from '../hooks/useWidth'

export const Test5 = () => {
	const scrollContainerRef = useRef<HTMLDivElement>(null)
	//const scrollContainer = useRef<HTMLDivElement>(null)

	// const size = useWindowSize()
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true })

	useEffect(() => {
		const scrollContainer = scrollContainerRef.current
		if (!scrollContainer) return

		const handleWheel = (evt: WheelEvent) => {
			evt.preventDefault()
			scrollContainer.scrollLeft += evt.deltaY * 4
		}

		scrollContainer.addEventListener('wheel', handleWheel)

		return () => {
			scrollContainer.removeEventListener('wheel', handleWheel)
		}
	}, [])


// // Configuraciones
// const data = {
//     ease: 0.1,
//     current: 0,
//     previous: 0,
//     rounded: 0
//   };
  
//   // Ejecutar skewScrolling una vez que se cargue la página.
//   useEffect(() => {
//     requestAnimationFrame(() => skewScrolling());
//   }, []);
  
//   // Establecer la altura del cuerpo.
//   useEffect(() => {
//     setBodyHeight();
//   }, [size.width]);
//   console.log(size)
//   // Establecer la altura del cuerpo como la altura del div de desplazamiento
//   const setBodyHeight = () => {
//     document.body.style.width = `${
//         scrollContainerRef.current!.getBoundingClientRect().width
//     }px`;
//   };
  
//   // Desplazamiento
//   const skewScrolling = () => {
//     // Establecer Current como la cantidad de desplazamiento
//     data.current = window.screenY;
//     // Establecer Previous como la posición de desplazamiento anterior
//     data.previous += (data.current - data.previous) * data.ease;
//     // Establecer rounded
//     data.rounded = Math.round(data.previous * 100) / 100;
  
//     // Diferencia entre
//     const difference = data.current - data.rounded;
//     const acceleration = difference / size.width;
//     const velocity = +acceleration;
//     const skew = velocity * 7.5;
  
//     // Asignar el sesgo y el desplazamiento suave al contenedor de desplazamiento
//     scrollContainerRef.current!.style.transform = `translate3d(-${data.rounded}px, 0, 0) skewX(${skew}deg)`;
  
//     // Loop a través de requestAnimationFrame
//     requestAnimationFrame(() => skewScrolling());
//   };
	return (
		<div
			className='ra flex   bg-gray-950 h-[100vh] overflow-x-hidden '
			ref={scrollContainerRef}>
			<Loader />

				<SideBar />
				<Home />
				<NewAbout />
				<NewEvents />
				<Contact />
				<Detail />
				<div ref={ref} className='min-w-[60vw] h-screen bg-green-600'>
					<motion.div
						style={{
							transform: isInView ? 'none' : 'translateX(-200px)',
							opacity: isInView ? 1 : 0,
							transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
						}}>
						sdasd
					</motion.div>{' '}
				</div>
		</div>
	)
}
