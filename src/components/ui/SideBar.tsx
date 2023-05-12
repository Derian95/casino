import { useState } from 'react'
import '../SideBar.css'
import logoExcalibur from '../../assets/excalibur.png'
import nombreSala from '../../assets/excalibur.svg'

export const SideBar = () => {
	const [showMenu, setShowMenu] = useState(false)

	const toggleMenu = () => {
		setShowMenu((prev) => !prev)
	}

	
	return (
		<aside className={`aside ${showMenu ? 'show' : 'hide'}`}>
			<div className='aside-contain'>
				<img src={logoExcalibur} alt='logo' style={{ width: 34 }} />
				<img src={nombreSala} alt='logo tr' style={{ height: 110 }} />
				<div className='contain-btn'>
					<div className='button-open-menu' onClick={toggleMenu}>
						<p className='icon-button'>+</p>
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
							<ul className='option'>
							<a href="#inicio" >INICIO</a>
								
							</ul>
							<ul className='option'>
							<a href="#nosotros" >NOSOTROS</a>
								</ul>
							<ul className='option'>
							<a href="#juegos" >JUEGOS</a>
                            
                            </ul>
							<ul className='option'>
							<a href="#contacto" >CONTACTO</a>

							</ul>
						</ol>
					</div>
				</div>

				<p style={{ color: 'white' }}>
					Un casino es una instalación que alberga y tiene capacidad para
					ciertos juegos de azar. Los casinos son comúnmente construidos cerca o
					en combinación con hoteles, restaurantes, tiendas comerciales,
					cruceros turísticos y otras atracciones.
				</p>
			</div>
		</aside>
	)
}
