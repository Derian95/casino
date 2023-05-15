
export const Card = () => {
  return (
    <div className=" rounded-lg h-52 w-80 bg-[#2c3036] flex flex-col justify-around relative px-8 hover:bg-slate-600 group transition-all duration-200 ease-in">
        <p className="text-[#798baa]">Evento</p>
        <p className="text-xl text-white font-bold">NUEVO BAR DE RAS</p>
        <p className="text-base text-white font-light">Descripc....</p>
        <div className="h-2 w-2 bg-slate-500 rounded-full absolute right-2 bottom-2 group-hover:w-14 group-hover:h-14 transition-all duration-200 ease-in"></div>
        
    </div>
  )
}
