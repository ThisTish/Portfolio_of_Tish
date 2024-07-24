import heroPic from '../assets/images/portfolioHero.png'

const Hero = () => {
	return (
	<div className='mx-auto w-screen'>
		<img src={ heroPic } className='h-40' alt='Tish Sirface with squiggles'/>
		{/* https://embiem.github.io/react-canvas-draw/ */}
		{/* add shapes, make scrollable? or animate?-verrrry borring and weird right now */}
		{/* make it draggable, with a background image to sorta show? */}
	</div>
	)
}

export default Hero