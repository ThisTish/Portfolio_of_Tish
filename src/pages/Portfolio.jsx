import ProjectCards from '../components/ProjectCards'
import Headings from '../components/Utils/Headings'
import projectList from '../data/projects.json'
import { FaGithub } from 'react-icons/fa'

const Portfolio = () => {
	return (
		<section className='mb-40'>
			<Headings text='Portfolio' />
			<div className="flex flex-col lg:-mt-48 gap-60 lg:gap-0 mb-16 mx-4 ">
				{projectList.map((project) => (
					<ProjectCards key={project.id} project={project} />
				)
				)}
			</div>
			<div className='bg-red flex-col items-center flex mt-96 mb-0 w-[90%] md:w-1/2 lg:w-1/3 ml-5 h-auto shadow-md'>
				<h3 className='-ml-5 -mt-6 text-secondary text-3xl tracking-tighter'>
					More projects Coming Soon!
				</h3>
				<div className='self-end relative '>
					<p className='text-highlight text-xl p-3 mb-6' >
						...or visit my GitHub to see more!
					</p>

					<a href="github.com/thistish" >
						<FaGithub className=' bg-shadow text-highlight size-14 p-2 absolute -bottom-8 -right-4 shadow-sm shadow-highlight border-white border-2 hover:bg-highlight hover:text-shadow hover:scale-95 active:scale-95 active:bg-highlight active:text-shadow' />
					</a>


				</div>
			</div>
		</section>
	)
}

export default Portfolio