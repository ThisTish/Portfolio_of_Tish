import ProjectCards from '../components/ProjectCards'
import Headings from '../components/Utils/Headings'
import projectList from '../data/projects.json'

const Portfolio = () => {
	return (
		<section className='space-y-36  mb-32'>
			<Headings text={Portfolio} />
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