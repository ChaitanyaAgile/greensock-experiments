import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css'
import { gsap } from 'gsap';
import { useLayoutEffect, useRef } from 'react';


gsap.registerPlugin(ScrollTrigger);


function App() {

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			gsap.to(
				[s1.current, s2.current],
				{
					scrollTrigger: {
						trigger: container.current,
						markers: true,
						start: 'top 98px',
						pin: true,
						scrub: true,
						end: 'bottom 98px',
					},
					y: -566 * 2,
				},
			);
		});
		return () => ctx.revert();
	}, []);

	const s1 = useRef();
	const s2 = useRef();
	const container = useRef();

	return (
		<>
			<nav></nav>
			<div className='flex-center slide1'>1</div>
			<div className='flex-center slide2'>2</div>
			<div ref={container} className='flex-center slide3'>
				<div className='phone box1'>
					<div ref={s1}>
						<p className='sl-11 red'>text1</p>
						<p className='sl-12 blue'>text2</p>
						<p className='sl-13 green'>text3</p>
					</div>
				</div>
				<div className='phone box2'>
					<div ref={s2}>
						<p className='sl-21 red'>right1</p>
						<p className='sl-22 blue'>right2</p>
						<p className='sl-23 green'>right3</p>
					</div>
				</div>
			</div>
			<div className='flex-center slide4'>4</div>
			<div className='flex-center slide5'>5</div>
		</>
	);
}

export default App;
