
import { useLayoutEffect, useRef } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import { SideBar2 } from "./components/ui/SideBar2";
import { VideoBackGround } from "./components/pages/home/VideoBackGround";
gsap.registerPlugin(ScrollTrigger)
export const Test = () => {

    //const component = useRef<HTMLDivElement>(null)
    const slider = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
          let panels = gsap.utils.toArray(".panel");
          gsap.to(panels, {
            xPercent: -100 * (panels.length - 1),
            ease: "none",
            scrollTrigger: {
              trigger: slider.current,
              pin: true,
              scrub: 10,
              //snap: 1 / (panels.length - 1),
              end: () => "+=" + slider.current!.offsetWidth,
              
            }
          });
        }, );
        return () => ctx.revert();
      });

  return (
    <div className="  flex flex-nowrap " ref={slider}>
        {/* <SideBar  /> */}
        <SideBar2/>
          <div className="h-screen min-w-[100vw] bg-red-800 panel ">
           <VideoBackGround/>
        </div>
        <div className="h-screen w-screen max-w-fit  panel  bg-red-500" id="como">
          <div className="w-[1500px] text-white bg-orange-600">
          <h1 className="font-black text-5xl">NOSOTROS</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem repellat obcaecati veritatis quae quam, beatae nostrum quia corporis aut iusto, excepturi placeat illum blanditiis? Odit similique iure atque sit commodi?</p>
          </div>
 
        </div>
        
        <div className="h-screen w-fit  panel">
        <h1 className="h-64 w-[1200px] bg-red-900">hola</h1>

        </div>
    </div>
    )
};