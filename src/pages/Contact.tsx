import { Map } from '../components/pages/contact/Map'
import '../index.css'

export const Contact = () => {
	return (
		<div className=' h-screen min-w-[100vw] z-10 relative flex justify-center flex-col lg:flex-row ' id='contact'>
			<div className='h-full  lg:w-2/4  flex flex-col items-center justify-center'>
				<p>Contacto</p>

				<p>Escribanos ra de rasssasas</p>
				<form action='' className='flex flex-col gap-y-3 w-3/4  '>
					<div className='w-full group'>
						<input
							type='text'
							placeholder='Nombre'
							className='relative ra  h-14 w-full bg-slate-600 outline-none px-4'
						/>
						<div className='h-1 w-0 bg-red-600 group-focus-within:w-full transition-all duration-200 ease-in'></div>
					</div>
					<div className='w-full group'>
						<input
							type='text'
							placeholder='Correo'
							className='relative ra  h-14 w-full bg-slate-600 outline-none px-4'
						/>
						<div className='h-1 w-0 bg-red-600 group-focus-within:w-full transition-all duration-200 ease-in'></div>
					</div>
					<div className='w-full group'>
						<input
							type='text'
							placeholder='Asunto'
							className='relative ra  h-14 w-full bg-slate-600 outline-none px-4'
						/>
						<div className='h-1 w-0 bg-red-600 group-focus-within:w-full transition-all duration-200 ease-in'></div>
					</div>
          <div className='w-full h-auto group'>
					        <textarea className='relative ra  h-24 w-full bg-slate-600 outline-none px-4 pt-4'placeholder='Mensaje' />
                 <div className='-translate-x-1 h-1 w-0 bg-red-600 group-focus-within:w-full transition-all duration-200 ease-in'></div>
                </div>
				</form>
			</div>
			<div className=' lg:w-2/4  h-screen'>
        <Map/>
      </div>
		</div>
	)
}
