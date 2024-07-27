import heroPic from '../assets/images/TishSirfaceLogo.png'

const Hero = () => {
	return (
	<div className='mx-auto w-screen'>
		<img src={ heroPic } className='h-40' alt='Tish Sirface with squiggles'/>
		{/* https://embiem.github.io/react-canvas-draw/ */}
	</div>
	)
}

export default Hero