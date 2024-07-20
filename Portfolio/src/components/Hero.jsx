import heroPic from '../assets/images/portfolioHero.png'

const Hero = () => {
	return (
	<div className='mx-auto w-screen'>
		<img src={ heroPic } className='w-screen' alt='Tish Sirface with squiggles'/>
		{/* add shapes, make scrollable? or animate?-verrrry borring and weird right now */}
		{/* make it draggable, with a background image to sorta show? */}
	</div>
	)
}

export default Hero