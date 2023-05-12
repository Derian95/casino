import { useRef } from 'react';
import './App.css'
import video2 from './assets/video.mp4'
import { Cursor } from './components/ui/Cursor'
import { SideBar } from './components/ui/SideBar'



function App() {
	const contentRef = useRef<HTMLDivElement>(null);

	function handleWheel(event: React.WheelEvent<HTMLDivElement>) {
	  const content = contentRef.current;
	  if (!content) {
		return;
	  }
  
	  content.scrollLeft += event.deltaY;
	}
	
	return (
		<div className='cont'    ref={contentRef}
		onWheel={handleWheel}
		>
			<Cursor/>
			<SideBar  />
			<div className='video-background' id='inicio'>
				<video autoPlay loop muted>
					<source src={video2} type='video/mp4' />
				</video>
				<div className='overlay'></div>
				<div className='content'>
					<h1 className='test' >EXCALIBUR</h1>
				</div> 
			
			</div>
			<div style={{  backgroundColor:'#191919',height:'100vh', minWidth:'100vw'}}>
				<div style={{paddingRight:100, marginBottom:'80px'}} id='nosotros'>
					<h4 className='test'>SOBRE NOSOTROS</h4>
					<p  className='text'>Lorem Ipsum on yksinkertaisesti testausteksti, jota tulostus- ja ladontateollisuudet käyttävät. Lorem Ipsum on ollut teollisuuden normaali testausteksti jo 1500-luvulta asti, jolloin tuntematon tulostaja otti kaljuunan ja sekoitti sen tehdäkseen esimerkkikirjan. Se ei ole selvinnyt vain viittä vuosisataa, mutta myös loikan elektroniseen kirjoitukseen, jääden suurinpiirtein muuntamattomana. Se tuli kuuluisuuteen 1960-luvulla kun Letraset-paperiarkit, joissa oli Lorem Ipsum pätkiä, julkaistiin ja vielä myöhemmin tietokoneen julkistusohjelmissa, kuten Aldus PageMaker joissa oli versioita Lorem Ipsumista.</p>
				
				</div>
			</div>

			<div style={{  backgroundColor:'#191919',height:'100vh', minWidth:'100vw'}}>
				<div style={{paddingRight:100, marginBottom:'80px'}} id='juegos'>
					<h4 className='test'>JUEGOS</h4>
					<p  className='text'>Lorem Ipsum on yksinkertaisesti testausteksti, jota tulostus- ja ladontateollisuudet käyttävät. Lorem Ipsum on ollut teollisuuden normaali testausteksti jo 1500-luvulta asti, jolloin tuntematon tulostaja otti kaljuunan ja sekoitti sen tehdäkseen esimerkkikirjan. Se ei ole selvinnyt vain viittä vuosisataa, mutta myös loikan elektroniseen kirjoitukseen, jääden suurinpiirtein muuntamattomana. Se tuli kuuluisuuteen 1960-luvulla kun Letraset-paperiarkit, joissa oli Lorem Ipsum pätkiä, julkaistiin ja vielä myöhemmin tietokoneen julkistusohjelmissa, kuten Aldus PageMaker joissa oli versioita Lorem Ipsumista.</p>
				
				</div>
			</div>

			<div style={{  backgroundColor:'#191919',height:'100vh', minWidth:'100vw'}}>
				<div style={{paddingRight:100, marginBottom:'80px'}} id='contacto'>
					<h4 className='test'>CONTACTO</h4>
					<p  className='text'>Lorem Ipsum on yksinkertaisesti testausteksti, jota tulostus- ja ladontateollisuudet käyttävät. Lorem Ipsum on ollut teollisuuden normaali testausteksti jo 1500-luvulta asti, jolloin tuntematon tulostaja otti kaljuunan ja sekoitti sen tehdäkseen esimerkkikirjan. Se ei ole selvinnyt vain viittä vuosisataa, mutta myös loikan elektroniseen kirjoitukseen, jääden suurinpiirtein muuntamattomana. Se tuli kuuluisuuteen 1960-luvulla kun Letraset-paperiarkit, joissa oli Lorem Ipsum pätkiä, julkaistiin ja vielä myöhemmin tietokoneen julkistusohjelmissa, kuten Aldus PageMaker joissa oli versioita Lorem Ipsumista.</p>
				
				</div>
			</div>
		</div>
	)
}

export default App
