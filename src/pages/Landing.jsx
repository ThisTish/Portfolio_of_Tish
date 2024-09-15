import DreamDrop from "../components/Landing/DreamDrop"
import Hero from "../components/Landing/Hero"
import MyDreams from "../components/Landing/MyDreams"
import YourDream from "../components/Landing/YourDream"
import { FaArrowCircleUp } from 'react-icons/fa'




const Landing = () => {

	return (
		<>
			<main className="space-y-24 md:space-y-96" id="top">

				<div>
					<Hero />
				</div>

				<div id="my-dreams">
			<h3 className='text-highlight text-2xl font-bold [text-shadow:_-2px_4px_0_var(--shadow)] text-center md:-mb-7 md:text-3xl lg:text-5xl'>My Dreams</h3>

					<MyDreams />
				</div>
		

				{/* <div>
					<YourDream />
				</div> */}

				<div className="pb-96 space-y-28 flex flex-col items-center justify-center" style={{background: 'linear-gradient(to top, var(--yellow), var(--primary)'}}>
			<h3 className='text-highlight text-2xl font-bold [text-shadow:_-2px_4px_0_var(--shadow)] md:text-3xl lg:text-5xl'>Your Dreams</h3>
					<DreamDrop />
					
				</div>

				


			</main>
		</>
	)
}

export default Landing