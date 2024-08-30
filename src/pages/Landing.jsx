import DreamDrop from "../components/Landing/DreamDrop"
import Hero from "../components/Landing/Hero"
import MyDreams from "../components/Landing/MyDreams"
// import YourDream from "../components/Landing/YourDream"




const Landing = () => {

	return (
		<>
			<main className="space-y-24 md:space-y-96">

				<div>
					<Hero />
				</div>

				<div id="my-dreams">
			<h1 className='text-highlight text-4xl font-bold [text-shadow:_-2px_4px_0_var(--shadow)] text-center md:-mb-7 md:text-5xl lg:text-7xl'>My Dreams</h1>

					<MyDreams />
				</div>
		
{/* 
				<div>
					<YourDream />
				</div> */}

				<div className="pb-96 flex flex-col items-center justify-center bg-yellow ">
			<h1 className='text-highlight text-3xl font-bold [text-shadow:_-2px_4px_0_var(--shadow)] md:text-5xl lg:text-7xl'>Your Dreams</h1>
					<DreamDrop />
					<p className="text-2xl text-secondary">(doesn't save quite yet)</p>
				</div>


			</main>
		</>
	)
}

export default Landing