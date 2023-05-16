import '../index.css'

export const Contact = () => {
  return (
    <div className="h-screen w-screen z-10 relative flex justify-center flex-col lg:flex-row ">
        <div className="h-full w-screen lg:w-2/4  flex flex-col items-center justify-center">
            <p>Contacto</p>

            <p>Escribanos ra de rasssasas</p>
            <form action="" className="flex flex-col gap-y-2 w-3/4  ">
                <input type="text" placeholder="Nombre" className="after:  h-14 bg-slate-600 outline-none"/>
                <input type="text" placeholder="Apellidos" className="  h-14 bg-slate-600 outline-none"/>
                <input type="text" placeholder="Asunto" className="  h-14 bg-slate-600 outline-none"/>
                <textarea className="ra h-24 bg-slate-600"/>
            </form>
        </div>
        <div className="w-screen lg:w-2/4  h-screen">

        </div>
    </div>
  )
}
