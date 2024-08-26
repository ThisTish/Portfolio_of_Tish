import Hero from "../components/Landing/Hero"
import MyDreams from "../components/Landing/MyDreams"




const Landing = () => {

	return (
		<>
			<main className="space-y-96">

				<div>
					<Hero />
				</div>

				<div>
			<h1 className='text-highlight text-3xl font-bold [text-shadow:_-2px_4px_0_var(--shadow)] text-center -mb-7 md:text-5xl lg:text-7xl'>My Dreams</h1>

					<MyDreams />
				</div>

			

				<div className="pb-96 flex flex-col items-center justify-center bg-yellow space-y-10">
			<h1 className='text-highlight text-3xl font-bold [text-shadow:_-2px_4px_0_var(--shadow)] md:text-5xl lg:text-7xl'>Your Dreams</h1>
					<p className="text-2xl text-secondary">coming true soon...</p>
				</div>


			</main>
		</>
	)
}

export default Landing