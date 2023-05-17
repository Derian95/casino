import { useState } from 'react'
import { Equalizer } from './Equalizer'
import { Twirl as Hamburger } from 'hamburger-react'

export const SideBar4 = () => {
	const [isOpen, setOpen] = useState(false)
	return (
		<div className='w-20 flex border-r-[0.5px] border-white flex-col justify-between py-10 backdrop-blur-lg backdrop-brightness-150 fixed h-screen z-30'>
			<div className='flex justify-center items-center'>
				<h1 className='text-white'>Logo</h1>
			</div>
			<div className='flex justify-center items-center'>
				<Hamburger toggled={isOpen} toggle={setOpen} color='white' />
			</div>

			<div className='flex justify-center items-center'>
				<Equalizer />
			</div>
		</div>
	)
}
