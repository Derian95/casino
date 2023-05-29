import { useState } from 'react'
import '../SideBar.css'
import { useUiStore } from '../../store/uiStore'
import { dataStore } from '../../store/dataStore'

export interface CSSProperties {
	[key: string]: string | number
}

export const SideBar = () => {
	const { casinoInfo } = dataStore()
	const [showMenu, setShowMenu] = useState(false)
	const { changeCursorState } = useUiStore()
	const toggleMenu = () => {
		setShowMenu((prev) => !prev)
	}

	const styles: CSSProperties = {
		'--mi-variable': casinoInfo?.color!,
		color: casinoInfo?.color!,
	}

	return (
		<aside
			className={`aside ${showMenu ? 'show' : 'hide'} group `}
			onMouseEnter={changeCursorState}
			onMouseLeave={changeCursorState}>
			<div
				className='aside-contain group-hover:brightness-150 transition-all duration-200 ease-out'
				onClick={toggleMenu}>
				<img
					src={casinoInfo?.logoPath}
					alt='logo'
					style={{ width: 55, objectFit: 'cover' }}
				/>
				{/* <img src={casinoInfo?.name} alt='logo tr' style={{ height: 110 }} /> */}
				<p className='rotate-90 text-xl font-bold'>{casinoInfo?.name}</p>
				<div className='h-16 w-16 relative flex items-center justify-center '>
					<div
						className={`rounded-full h-12 w-12 bg-white flex items-center justify-center  menu-botom`}
						style={styles}>
						<span className={`z-10 text-xl font-semibold `}>+</span>
					</div>
				</div>
			</div>
			<div className='menu'>
				<div>
					<p
						style={{
							color: 'white',
							fontSize: 25,
							fontWeight: 'bold',
							textAlign: 'center',
							marginBottom: 15,
						}}>
						EXPLORE
					</p>
					<div>
						<ol>
							<ul className='mb-2'>
								<a
									href='#home'
									className={`rounded-xl bg-white flex justify-center items-center text-sm py-1 font-bold   menu-botom`}
									style={styles}>
									INICIO
								</a>
							</ul>
							<ul className='mb-2'>
								<a
									href='#about'
									className={`rounded-xl bg-white flex justify-center items-center text-sm py-1 font-bold    menu-botom`}
									style={styles}>
									NOSOTROS
								</a>
							</ul>
							<ul className='mb-2'>
								<a
									href='#events'
									className={`rounded-xl bg-white flex justify-center items-center text-sm py-1 font-bold menu-botom`}
									style={styles}>
									EVENTOS
								</a>
							</ul>
							<ul className='mb-2'>
								<a
									href='#contact'
									className={`rounded-xl bg-white flex justify-center items-center text-sm py-1 font-bold  menu-botom`}
									style={styles}>
									CONTACTO
								</a>
							</ul>
						</ol>
					</div>
				</div>

				<p style={{ color: 'white', fontSize: 12 }}>
					Un casino es una instalación que alberga y tiene capacidad para
					ciertos juegos de azar. Los casinos son comúnmente construidos cerca o
					en combinación con hoteles, restaurantes, tiendas comerciales,
					cruceros turísticos y otras atracciones.
				</p>
			</div>
		</aside>
	)
}
