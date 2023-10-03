import { useEffect, useRef } from 'react'
import { ReactLenis } from '@studio-freight/react-lenis'
import { gsap } from 'gsap'
import { SplitText } from '@cyriacbr/react-split-text'

import './App.css'

function App() {
	const lenisRef = useRef()
	const titleRef = useRef()

	useEffect(() => {
		function update(time) {
			// console.log(time)
			console.log(lenisRef.current)
			// console.log('scrolling')
			lenisRef.current?.raf(time * 1000)
		}

		// gsap.ticker.add(update)

		return () => {
			gsap.ticker.remove(update)
		}
	}, [])

	// useEffect(() => {
	// 	const split = new SplitText(titleRef.current, { type: 'chars' })

	// 	console.log(split)
	// }, [])

	return (
		<ReactLenis root ref={lenisRef}>
			<main>
				<div className='intro'>
					<h1 className='intro__title'>
						<span className='intro__title-pre'>On-Scroll</span>
						<span className='intro__title-sub'>ReactLenis x GSAP</span>
					</h1>
					<span className='intro__info'>
						Please scroll moderately to fully experience the animations
					</span>
				</div>
				<SplitText>
					As human beings, we often find ourselves feeling out of place in the
					world around us. We sense that something is not quite right, that the
					reality we experience is not necessarily the truth. And yet, we are
					bound by the beliefs and illusions that have been ingrained in us
					since childhood.
				</SplitText>
				{/* <section className='horizontal-section'>
					<div className='content'>
						<h2 ref={titleRef} className='content__title'>
							As human beings, we often find ourselves feeling out of place in
							the world around us. We sense that something is not quite right,
							that the reality we experience is not necessarily the truth. And
							yet, we are bound by the beliefs and illusions that have been
							ingrained in us since childhood. It can be a difficult and
							confusing journey to try and unravel these beliefs, to see beyond
							the layers of deception that cloud our vision. We may feel as
							though we need to make an effort, to strive for enlightenment, to
							grasp at something just beyond our reach. But what if the answer
							is not found in effort, but in surrender? What if we simply allow
							ourselves to be carried by the flow of
						</h2>
					</div>
				</section>
				<section className='vertical-section'>vertical scroll</section>
				<section className='onzoom-section'>onzoom scroll</section>
				<section className='diagonal-section'>diagonal scroll</section>
				<section className='parallax-section'>parallax scroll</section> */}
			</main>
		</ReactLenis>
	)
}

export default App
