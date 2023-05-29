import { useEffect, useRef } from 'react'
import { Detail } from './components/pages/anunciament/Detail'
import { SideBar } from './components/ui/SideBar'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { NewAbout } from './pages/NewAbout'
import { NewEvents } from './pages/NewEvents'
import useMouseWheelScroll from './hooks/useMouseWheelScroll '

import image from './assets/ra.jpg'
import { useDataCasino } from './hooks/api/useDataCasino'
import { dataStore } from './store/dataStore'
import { Equalizer } from './components/ui/Equalizer'


export const App = () => {

	const boxScrollRef = useRef<HTMLDivElement>(null)
	useMouseWheelScroll(boxScrollRef);
	const {data:dataCasino, isSuccess, isFetching} = useDataCasino()


	const { setCasinoInfo } = dataStore()

	
	
	useEffect(() => {

		if (isSuccess && dataCasino) {
			setCasinoInfo(dataCasino.data);
		  }
		console.log(isFetching)
	}, [isSuccess, dataCasino, setCasinoInfo,isFetching])
	
	// if(isFetching) return <div className={`h-screen w-screen bg-red-950 absolute ${isFetching ? 'block':'hidden'}`}></div>

	return (
		<div className='flex flex-nowrap max-w-[100vw] h-[100vh] overflow-y-hidden container-app bg-gray-950 ' ref={boxScrollRef}>
		{isFetching ? <div className='h-full w-full bg-red-800 absolute top-0 z-50'></div> : ''}
		<img src={image} alt="" className='h-screen w-screen fixed z-[0] object-cover' />
        <div className='fixed h-screen w-screen z-0 bg-gradient-to-r from-slate-900 to-slate-950/95'></div>
			{
				isSuccess ? 
				(
					<>
					<SideBar  />
					<Equalizer />
					<Home />
					<NewAbout containerRef={boxScrollRef} />
					<NewEvents containerRef={boxScrollRef} />
					<Contact containerRef={boxScrollRef}/>
					<Detail />
					</>
				):(<></>)
			}
		</div>
	)
}
