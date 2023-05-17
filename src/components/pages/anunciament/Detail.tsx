



import { useUiStore } from "../../../store/uiStore"

export const Detail = () => {

    const { showDetail, changeStateDetail } = useUiStore()
  return (
    <div className={`fixed bg-slate-900 h-[200vh] w-screen z-40 transition-all duration-500 ease-in-out ${ showDetail ? 'translate-y-0' : 'translate-y-full'}`} onClick={ changeStateDetail }>

    </div>
  )
}
