import NameDetails from '../components/Resume/NameDetails'
import CareerObjectives from '../components/Resume/CareerObjectives'
import Education from '../components/Resume/Education'
import Projects from '../components/Resume/Projects'
import Skills from '../components/Resume/Skills'
import WorkExperience from '../components/Resume/WorkExperience'


const Resume = () => {
	return (
		<div>	
			<NameDetails />
			<CareerObjectives />
			<Education />
			<Projects />
			<Skills />
			<WorkExperience />
			<button>Download Resume</button>
		</div>
	)
}

export default Resume