import { About } from "../pages/About"
import { Contact } from "../pages/Contact"
import { Events } from "../pages/Events"
import { Home } from "../pages/Home"
export const Text2 = () => {
  return (
    <div className='w-screen h-auto bg-gradient-to-tl from-[#00091d] to-zinc-950 '>
        <Home/>
       <About/>
       <Events/>
       <Contact/>
    </div>
  )
}
