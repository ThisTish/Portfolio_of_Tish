import NameDetails from '../components/Resume/NameDetails'
import CareerObjective from '../components/Resume/CareerObjective'
import Education from '../components/Resume/Education'
import Projects from '../components/Resume/Projects'
import Skills from '../components/Resume/Skills'
import WorkExperience from '../components/Resume/WorkExperience'


const Resume = () => {
	return (
		<div>
			<h2 className="text-highlight text-3xl font-bold [text-shadow:_-2px_4px_0_var(--shadow)] mx-3 my-1 md:text-5xl lg:m-16 lg:text-7xl">Resume</h2>
			<div className='md:flex'>
				<NameDetails />
			<	CareerObjective />
			</div>
			<div className='md:flex justify-center items-center'>
				<Education />
				<Projects />
			</div>
			<div className='md:flex'>
				<WorkExperience />
				<Skills />
			</div>
			<div className="justify-center flex mb-20 md:absolute md:top-1/4 md:right-0">
			{/* <div className="flex justify-between text-secondary mx-6 my-7 py-2 text-xl font-sans bg-yellow max-w-sm md:-mr-1"> */}
				{/* <div className='flex flex-col space-y-2'>
				<p className='-ml-3 -mt-5'>For more</p>
				<p className=' -mt-6'> details...</p>
				</div>
				<a href='/files/Tisha_Sirface_Web_Development_Resume.pdf' download='Tish_Sirface-Web_Development_Resume.pdf'>
					<button className='bg-red text-highlight rounded-tl-full rounded-bl-full py-3 px-2 [text-shadow:_-2px_4px_0_var(--shadow)]'>
						Download Resume 
					</button>
				</a> */}
				<a href='/files/Tisha_Sirface_Web_Development_Resume.pdf' download='Tish_Sirface-Web_Development_Resume.pdf'>
					<button className='bg-red font-sans text-xl text-center text-highlight shadow-md shadow-secondary rounded-full p-5 [text-shadow:_-2px_4px_0_var(--shadow)]'>
						Download Full Resume 
					</button>
				</a>
				{/* </div> */}
			</div>
		</div>
	)
}

export default Resume