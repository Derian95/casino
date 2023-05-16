// import { FC } from "react"
import { Card } from './Card'

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export const ListAnunt = () => {
	const slider = useRef<HTMLDivElement>(null)

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			let panels = gsap.utils.toArray('.panel')
			gsap.to(panels, {
				xPercent: -100 * (panels.length - 1),
				ease: 'power3.easeOut',
				scrollTrigger: {
					trigger: slider.current,
					pin: true,
					scrub: 3,
					snap: 1 / (panels.length - 1),
					end: () => '+=' + slider.current!.offsetWidth,
				},
			})
		})
		return () => ctx.revert()
	})
	return (
		<div
			ref={slider}
			// className='w-full h-auto gap-4  grid grid-cols-1 px-4  sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 '
      className='flex gap-12 w-auto flex-nowrap justify-center items-center bg-red-500 h-screen'
      >
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
	)
}
