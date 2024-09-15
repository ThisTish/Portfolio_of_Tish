import NameDetails from '../components/Resume/NameDetails'
import CareerObjective from '../components/Resume/CareerObjective'
import Education from '../components/Resume/Education'
import Projects from '../components/Resume/Projects'
import Skills from '../components/Resume/Skills'
import WorkExperience from '../components/Resume/WorkExperience'


const Resume = () => {
	return (
		<div>
			<h2 className="text-highlight text-3xl font-bold [text-shadow:_-2px_4px_0_var(--shadow)] mx-3 my-1 md:text-5xl lg:m-16 lg:text-7xl lg:text-end">Resume</h2>
			<div className='md:flex'>
				<NameDetails />
			<	CareerObjective />
			</div>
			<div className='md:flex items-end'>
				<Education />
				<Projects />
			</div>
			<div className='flex flex-col-reverse md:flex-row md:mt-20 justify-between lg:justify-around lg:mt-'>  
				<Skills />
				<WorkExperience />
			</div>
			<div className="flex mb-28 justify-center md:justify-end md:-mt-16 md:mr-24 ">
			<div className="h-20 flex relative">
					{/* bubbles */}
					<div className="bg-yellow w-5 h-5 rounded-full absolute -left-2 bottom-3"></div>
					<div className="bg-shadow w-7 h-7 rounded-full absolute -right-3 -z-10"></div>
					<div className="bg-highlight w-10 h-10 rounded-full absolute top-6 -left-28"></div>
					<div className="border border-shadow border-3 w-5 h-5 rounded-full absolute -top-2 right-40 "></div>
					<div className="bg-green w-3 h-3 rounded-full absolute bottom-2 right-32"></div>
					<div className="bg-secondary w-5 h-5 rounded-full absolute top-1 right-14 "></div>
					<div className="bg-secondary w-5 h-5 rounded-full absolute left-8 -top-3 -z-10 "></div>

					<a href='/files/Tish_Sirface_Web_Development.pdf' download='Tish_Sirface-Web_Development_Resume.pdf'aria-label='Download pdf resume'>
					<button className='bg-red font-sans text-xl text-center text-highlight shadow-md shadow-secondary rounded-full p-5 [text-shadow:_-2px_4px_0_var(--shadow)] lg:text-4xl'>
						Download Full Resume 
					</button>
					</a>
				</div>
				</div>
		</div>
	)
}

export default Resume