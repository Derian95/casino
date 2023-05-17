import { useState } from 'react'
import { Loader } from '../components/ui/Loader'
import { SideBar4 } from '../components/ui/SideBar4'
import { About } from '../pages/About'
import { Contact } from '../pages/Contact'
import { Events } from '../pages/Events'
import { Home } from '../pages/Home'

export const Text2 = () => {
	const [openMenu, setOpenMenu] = useState(false)

	return (
		<div className='relative w-screen h-auto bg-gradient-to-tl from-[#00091d] to-zinc-950 '>
			<Loader />
			<button
				className='z-50 bg-red-500 caret-purple-100'
				onClick={() => {
					setOpenMenu((prev) => !prev)
				}}>
				onclicks
			</button>
			<div
				className={`fixed transition-transform duration-500 ease-in-out w-screen h-screen bg-orange-500 z-30 ${
					openMenu ? 'translate-x-0 ' : 'translate-x-full delay-200'
				}`}>
				<div
					className={`fixed transition-transform duration-500 ease-in-out w-full h-full bg-black z-30 ${
						openMenu ? 'translate-x-0 delay-200' : 'translate-x-full '
					} pl-36`}>
					<div className='flex flex-col justify-center  h-full gap-y-6'>
          <p
						className={`text-white text-3xl ${
							openMenu ? 'opacity-100' : 'opacity-0'
						} transition-opacity duration-700 delay-1000`}>
						INICIO
					</p>
					<p
						className={`text-white text-3xl ${
							openMenu ? 'opacity-100' : 'opacity-0'
						} transition-opacity duration-700 delay-1000`}>
						NOSOTROS
					</p>
					<p
						className={`text-white text-3xl ${
							openMenu ? 'opacity-100' : 'opacity-0'
						} transition-opacity duration-700 delay-1000`}>
						ANUNCIOS
					</p>
					<p
						className={`text-white text-3xl ${
							openMenu ? 'opacity-100' : 'opacity-0'
						} transition-opacity duration-700 delay-1000`}>
						CONTACTO
					</p>
					<p className='absolute text-white right-10  rotate-90 text-2xl font-bold'>
						MENU
					</p>
          </div>
				</div>
			</div>
			<SideBar4 />
			<Home />
			<About />
			<Events />
			<Contact />
		</div>
	)
}
