import { useTheme } from "../ThemeProvider"
import { FaArrowCircleDown, FaArrowAltCircleRight, FaArrowCircleRight } from 'react-icons/fa'


const Hero = () => {
	const { theme } = useTheme()

	return (
		<div>
			<div className='hero relative mb-96'>

				<img
					src={theme.images.hero}
					className='w-full'
					alt="dandelion" />

				<p className='text-secondary font-extralight tracking-wide text-2xl absolute top-1/2 sm:text-4xl md:text-6xl'> Hi, I'm Tish </p>
				<p className='text-highlight font-extralight tracking-widest text-lg absolute top-2/3 sm:text-2xl md:text-4xl'> Developer, Dreamer, Disc Golfer </p>

				<div className='absolute flex right-3 bottom-2 space-x-3 md:space-x-5 md:bottom-10 md:right-10 lg:bottom-20 lg:right-20'>
					<a className='text-secondary text-2xl rounded-full bg-highlight sm:hidden'><FaArrowCircleDown /></a>
					<a className='hidden text-highlight tracking-tighter p-3 text-xs bg-secondary rounded-full border-2 border-highlight hover:bg-green hover:border-0 sm:block md:text-lg'>Dream with me</a>

					<a className='text-highlight text-2xl rounded-ful bg-secondary rounded-full sm:hidden'><FaArrowCircleRight /></a>
					<a className='hidden text-secondary tracking-tighter p-3 text-xs bg-highlight rounded-full border-2 border-secondary hover:bg-green hover:border-0 sm:block md:text-lg'>My Projects</a>
				</div>
			</div>
		</div>
	)
}

export default Hero