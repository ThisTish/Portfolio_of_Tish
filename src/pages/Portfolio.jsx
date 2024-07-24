import ProjectCards from '../components/ProjectCards'
import projectList from '../projects.json'

const Portfolio = () => {
	return (
		<section className='mb-5'>
			<h2 className="text-highlight text-3xl font-bold [text-shadow:_-2px_4px_0_var(--shadow)] mx-3 my-1">Portfolio</h2>
			<div className="space-y-9">
				{ projectList.map((project) =>(
					<ProjectCards key={project.id} project={project} />
				) 
				)}
			</div>
		</section>
	)
}

export default Portfolio