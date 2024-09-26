import ProjectCards from '../components/ProjectCards'
import Headings from '../components/Utils/Headings'
import projectList from '../data/projects.json'

const Portfolio = () => {
	return (
		<section className='mb-32'>
			<Headings text='Portfolio' />
			<div className="flex flex-col gap-60 md:gap-0 mb-16 mx-4 ">
				{ projectList.map((project) =>(
					<ProjectCards key={project.id} project={project} />
				) 
				)}
			</div>
		</section>
	)
}

export default Portfolio