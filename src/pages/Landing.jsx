import Hero from "../components/Landing/Hero"
import MyDreams from "../components/Landing/MyDreams"



const Landing = () => {

	return (
		<>
			<main className="space-y-60">

				<div>
					<Hero />
				</div>

				<div>
					<h1 className='text-highlight text-3xl font-bold [text-shadow:_-2px_4px_0_var(--shadow)] text-center md:text-5xl lg:text-7xl'>My Dreams</h1>

					<MyDreams />
				</div>

				{/* <div>
					<MyDreams />
				</div>

				<div>
					<YourDream />
				</div> */}


			</main>
		</>
	)
}

export default Landing