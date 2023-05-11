import './App.css'
import video2 from './assets/video.mp4'
import { Cursor } from './components/ui/Cursor'
import { SideBar } from './components/ui/SideBar'
function App() {

	
	return (
		<div style={{width:'100vw'}}>
			<Cursor/>
			<SideBar  />
			<div className='video-background'>
				<video autoPlay loop muted>
					<source src={video2} type='video/mp4' />
				</video>
				<div className='overlay'></div>
				<div className='content'>
					<h1 className='test' >EXCALIBUR</h1>
				</div> 
				{/* <div className='overlay'></div>
				<div className='content'>
					<h1>CHANO GEI</h1>
					<p>Casino de casino de los casinos flo flo flo</p>
				</div> */}
			</div>
			<div style={{ height:'120vh', backgroundColor:'#191919',padding:'25px 50px'}}>
				<h4 className='test'>SOBRE NOSOTROS</h4>
				<p style={{ maxWidth:'700px'}} className='text'>Lorem Ipsum on yksinkertaisesti testausteksti, jota tulostus- ja ladontateollisuudet käyttävät. Lorem Ipsum on ollut teollisuuden normaali testausteksti jo 1500-luvulta asti, jolloin tuntematon tulostaja otti kaljuunan ja sekoitti sen tehdäkseen esimerkkikirjan. Se ei ole selvinnyt vain viittä vuosisataa, mutta myös loikan elektroniseen kirjoitukseen, jääden suurinpiirtein muuntamattomana. Se tuli kuuluisuuteen 1960-luvulla kun Letraset-paperiarkit, joissa oli Lorem Ipsum pätkiä, julkaistiin ja vielä myöhemmin tietokoneen julkistusohjelmissa, kuten Aldus PageMaker joissa oli versioita Lorem Ipsumista.</p>
			</div>
		</div>
	)
}

export default App
