import { useTheme } from './ThemeProvider'


const Hero = () => {
	const { theme } = useTheme()

	return (
	<div className='mx-auto w-screen'>
		<img src={ theme.images.name }  className='h-40' alt='Tish Sirface with squiggles'/>
		{/* https://embiem.github.io/react-canvas-draw/ */}
	</div>
	)
}

export default Hero