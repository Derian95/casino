import { useState } from 'react'

export const Card = () => {
	const [position, setPosition] = useState({ x: 0, y: 0 })

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		setPosition({ x: e.clientX, y: e.clientY })
	}

	const handleMouseEnter = () => {
		// desativa a transição para que o efeito de parallax seja mais suave
		const circle = document.querySelector<HTMLDivElement>('.circle')
		circle!.style.transition = 'none'
	}
	const handleMouseLeave = () => {
		const circle = document.querySelector<HTMLDivElement>('.circle')
		if (circle) {
			circle.style.transition = 'transform 0.2s ease-out'
			circle.style.transform =
				'translate(-50%, -50%) rotateY(0deg) rotateX(0deg)'
		}
	}

	return (
		<div
			onMouseMove={handleMouseMove}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			className=' rounded-lg h-52 w-80 bg-[#2c3036] flex flex-col justify-around relative px-8 hover:bg-slate-600 group transition-all duration-200 ease-in'>
			<p className='text-[#798baa]'>Evento</p>
			<p className='text-xl text-white font-bold'>NUEVO BAR DE RAS</p>
			<p className='text-base text-white font-light'>Descripc....</p>
			<div
				className='circle h-2 w-2 bg-slate-500 rounded-full absolute right-2 bottom-2 group-hover:w-14 group-hover:h-14 transition-all duration-200 ease-in'
				style={{
					transform: `translate(-50%, -50%) rotateY(${
						(position.x - window.innerWidth / 2) / 10
					}deg) rotateX(${
						((position.y - window.innerHeight / 2) / 10) * -1
					}deg)`,
				}}></div>
			<div
				className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full bg-cover bg-center bg-no-repeat transition-transform duration-200 ease-out hover:scale-110 circle'
				style={{
					transform: `translate(-50%, -50%) rotateY(${
						(position.x - window.innerWidth / 2) / 10
					}deg) rotateX(${
						((position.y - window.innerHeight / 2) / 10) * -1
					}deg)`,
				}}></div>
		</div>
	)
}
