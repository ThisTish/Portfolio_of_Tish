import ProjectCards from '../components/ProjectCards'
import projectList from '../projects.json'

const Portfolio = () => {
	return (
		<section className='space-y-36  mb-32'>
			<div className='ml-10 relative h-20 w-48 md:w-72 lg:h-24 lg:w-96 '>
				<div className="bg-yellow w-5 h-5 rounded-full absolute bottom-3"></div>
				<div className="bg-red w-6 h-6 rounded-full absolute left-14 -z-10"></div>
					<div className="bg-shadow w-7 h-7 rounded-full absolute -left-10 top-3 -z-10 lg:z-10 "></div>
					<div className="bg-highlight w-10 h-10 rounded-full absolute top-8 -left-48"></div>
					<div className="border border-shadow border-3 w-5 h-5 rounded-full absolute right-40 -z-10"></div>
					<div className="bg-green w-3 h-3 rounded-full absolute bottom-5 right-32"></div>
					<div className="bg-secondary w-5 h-5 rounded-full absolute top-2 right-10 -z-10 "></div>
			<h2 className="text-highlight text-3xl font-bold [text-shadow:_-2px_4px_0_var(--shadow)] mx-3 my-1 md:text-5xl lg:m-16 lg:text-7xl">Portfolio</h2>
			</div>
			<div className="space-y-32 mb-16">
				{ projectList.map((project) =>(
					<ProjectCards key={project.id} project={project} />
				) 
				)}
			</div>
		</section>
	)
}

export default Portfolio