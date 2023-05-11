import './App.css'
import video2 from './assets/video.mp4'
import iamgenCasino from './assets/casino1.jpg'
import { Cursor } from './components/ui/Cursor'
import { SideBar } from './components/ui/SideBar'
function App() {

	
	return (
		<div style={{width:'100vw'}}>
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
				{/* <div className='overlay'></div>
				<div className='content'>
					<h1>CHANO GEI</h1>
					<p>Casino de casino de los casinos flo flo flo</p>
				</div> */}
			</div>
			<div style={{  backgroundColor:'#191919',padding:'25px 50px'}}>
				<div style={{paddingRight:100, marginBottom:'80px'}} id='nosotros'>
					<h4 className='test'>SOBRE NOSOTROS</h4>
					<p  className='text'>Lorem Ipsum on yksinkertaisesti testausteksti, jota tulostus- ja ladontateollisuudet käyttävät. Lorem Ipsum on ollut teollisuuden normaali testausteksti jo 1500-luvulta asti, jolloin tuntematon tulostaja otti kaljuunan ja sekoitti sen tehdäkseen esimerkkikirjan. Se ei ole selvinnyt vain viittä vuosisataa, mutta myös loikan elektroniseen kirjoitukseen, jääden suurinpiirtein muuntamattomana. Se tuli kuuluisuuteen 1960-luvulla kun Letraset-paperiarkit, joissa oli Lorem Ipsum pätkiä, julkaistiin ja vielä myöhemmin tietokoneen julkistusohjelmissa, kuten Aldus PageMaker joissa oli versioita Lorem Ipsumista.</p>
				
				</div>

				<div style={{paddingRight:100, display:'flex', flexWrap:'wrap', marginBottom:80}}>
					<div style={{width:'48%', height:'50vh', backgroundColor:'orange'}}> <img src={iamgenCasino} alt="" width={'100%'} height={'100%'}/> </div>
					<div style={{width:'48%', height:'50vh', backgroundColor:'rgb(13 15 20)',color:'white'}}>ja sekoitti sen tehdäkseen esimerkkikirjan. Se ei ole selvinnyt vain viittä vuosisataa, mutta myös loikan elektroniseen kirjoitukseen, jääden suurinpiirtein muuntamattomana. Se tuli kuuluisuuteen 1960-luvulla kun Letraset-paperiarkit, joissa oli Lorem Ipsum pätkiä, julkaistiin ja vielä myöhemmin tietokoneen julkistusohjelmissa, kuten Aldus PageMaker joissa oli versioita Lorem Ipsumista.</div>
					
					<div style={{width:'48%', height:'50vh', backgroundColor:'rgb(13 15 20)',color:'white'}}>ja sekoitti sen tehdäkseen esimerkkikirjan. Se ei ole selvinnyt vain viittä vuosisataa, mutta myös loikan elektroniseen kirjoitukseen, jääden suurinpiirtein muuntamattomana. Se tuli kuuluisuuteen 1960-luvulla kun Letraset-paperiarkit, joissa oli Lorem Ipsum pätkiä, julkaistiin ja vielä myöhemmin tietokoneen julkistusohjelmissa, kuten Aldus PageMaker joissa oli versioita Lorem Ipsumista.</div>
					<div style={{width:'48%', height:'50vh', backgroundColor:'blue'}}><img src={iamgenCasino} alt="" width={'100%'} height={'100%'}/></div>
				</div>
				<div style={{paddingRight:100, marginBottom:'80px',width:'50vh'}} id='section1' >
					<h4 className='test'>METODOS DE PAGO</h4>
					<p  className='text'>Lorem Ipsum on yksinkertaisesti testausteksti, jota tulostus- ja ladontateollisuudet käyttävät. Lorem Ipsum on ollut teollisuuden normaali testausteksti jo 1500-luvulta asti, jolloin tuntematon tulostaja otti kaljuunan ja sekoitti sen tehdäkseen esimerkkikirjan. Se ei ole selvinnyt vain viittä vuosisataa, mutta myös loikan elektroniseen kirjoitukseen, jääden suurinpiirtein muuntamattomana. Se tuli kuuluisuuteen 1960-luvulla kun Letraset-paperiarkit, joissa oli Lorem Ipsum pätkiä, julkaistiin ja vielä myöhemmin tietokoneen julkistusohjelmissa, kuten Aldus PageMaker joissa oli versioita Lorem Ipsumista.</p>
				
				</div>

				<div  style={{paddingRight:100, marginBottom:'80px',width:'50vh'}} id='juegos'>
					<h4 className='test'>JUEGOS</h4>
					<p  className='text'>Lorem Ipsum on yksinkertaisesti testausteksti, jota tulostus- ja ladontateollisuudet käyttävät. Lorem Ipsum on ollut teollisuuden normaali testausteksti jo 1500-luvulta asti, jolloin tuntematon tulostaja otti kaljuunan ja sekoitti sen tehdäkseen esimerkkikirjan. Se ei ole selvinnyt vain viittä vuosisataa, mutta myös loikan elektroniseen kirjoitukseen, jääden suurinpiirtein muuntamattomana. Se tuli kuuluisuuteen 1960-luvulla kun Letraset-paperiarkit, joissa oli Lorem Ipsum pätkiä, julkaistiin ja vielä myöhemmin tietokoneen julkistusohjelmissa, kuten Aldus PageMaker joissa oli versioita Lorem Ipsumista.</p>
				
				</div>

				<div style={{paddingRight:100, marginBottom:'80px',width:'50vh'}} id='contacto'>
					<h4 className='test'>JUEGOS</h4>
					<p  className='text'>Lorem Ipsum on yksinkertaisesti testausteksti, jota tulostus- ja ladontateollisuudet käyttävät. Lorem Ipsum on ollut teollisuuden normaali testausteksti jo 1500-luvulta asti, jolloin tuntematon tulostaja otti kaljuunan ja sekoitti sen tehdäkseen esimerkkikirjan. Se ei ole selvinnyt vain viittä vuosisataa, mutta myös loikan elektroniseen kirjoitukseen, jääden suurinpiirtein muuntamattomana. Se tuli kuuluisuuteen 1960-luvulla kun Letraset-paperiarkit, joissa oli Lorem Ipsum pätkiä, julkaistiin ja vielä myöhemmin tietokoneen julkistusohjelmissa, kuten Aldus PageMaker joissa oli versioita Lorem Ipsumista.</p>
				
				</div>
			</div>
		</div>
	)
}

export default App
