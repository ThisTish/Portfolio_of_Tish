import { useTheme } from "../ThemeProvider"
import { FaArrowCircleDown, FaArrowAltCircleRight, FaArrowCircleRight } from 'react-icons/fa'
import { Link } from "react-router-dom"


const Hero = () => {
	const { theme } = useTheme()

	return (
		<div>
			<div className='hero relative'>

				<img
					src={theme.images.hero}
					className='w-full'
					alt="dandelion to portray dreams" />

				<h1 className='ml-2 text-secondary  text-3xl absolute top-1/2 sm:text-5xl md:text-7xl '> Hi, I'm Tish </h1>
				<h2 className='ml-2 text-highlight  tracking-widest text-lg absolute top-2/3 text-pretty sm:text-2xl md:text-4xl'> Developer, Dreamer, Disc Golfer </h2>

				<div className='absolute flex right-3 bottom-2 space-x-3 md:space-x-5 md:bottom-10 md:right-10 lg:bottom-20 lg:right-20'>
					<a href='#my-dreams' className='text-secondary text-3xl rounded-full bg-highlight sm:hidden'aria-label="Scroll to my dreams"><FaArrowCircleDown /></a>
					<a href='#my-dreams' className='hidden text-highlight tracking-tighter p-3 text-xs bg-secondary rounded-full border-4 border-highlight hover:bg-green hover:border-2 sm:block md:text-lg'aria-label="Scroll to my dreams">Dream with me</a>

					<Link to='/portfolio' className='text-highlight text-3xl bg-secondary rounded-full sm:hidden'aria-label="Go to my projects page"><FaArrowCircleRight /></Link>
					<Link to='/portfolio' className='hidden text-secondary tracking-tighter p-3 text-xs bg-highlight rounded-full border-4 border-secondary hover:bg-green hover:border-2 hover:text-highlight sm:block md:text-lg'aria-label="Go to my projects page">My Projects</Link>
				</div>
			</div>
		</div>
	)
}

export default Hero