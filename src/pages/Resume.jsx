import NameDetails from '../components/Resume/NameDetails'
import CareerObjective from '../components/Resume/CareerObjective'
import Education from '../components/Resume/Education'
import Projects from '../components/Resume/Projects'
import Skills from '../components/Resume/Skills'
import WorkExperience from '../components/Resume/WorkExperience'
import resume from '/assets/files/Tisha_Sirface_Web_Development_Resume.pdf'


const Resume = () => {
	return (
		<div>
			<h2 className="text-highlight text-3xl font-bold [text-shadow:_-2px_4px_0_var(--shadow)] mx-3 my-1">MyResume</h2>

			<NameDetails />
			<CareerObjective />
			<Education />
			<Projects />
			<WorkExperience />
			<Skills />
			<div className="flex justify-between text-secondary m-5 py-2 text-xl font-sans bg-yellow max-w-sm">
				<div className='flex flex-col space-y-2'>
				<p className='-ml-3 -mt-5'>For more</p>
				<p className=' -mt-6'> details...</p>
				</div>
				<a href='/assets/files/Tisha_Sirface_Web_Development_Resume.pdf' download={resume}>
					<button className='bg-red text-highlight rounded-tl-full rounded-bl-full py-3 px-1 [text-shadow:_-2px_4px_0_var(--shadow)]'>
						Download Resume Here
					</button>
				</a>
			</div>
		</div>
	)
}

export default Resume