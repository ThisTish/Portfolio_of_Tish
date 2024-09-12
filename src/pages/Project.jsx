import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Button from '../components/Utils/Button'
import ButtonSecondary from '../components/Utils/ButtonSecondary'
import Headings from '../components/Utils/Headings'
import ProjectCards from '../components/projectElements/ProjectCards'
import { FaGithub } from 'react-icons/fa'
import projects from '../data/projectPages.json'

const title = projects

const Project = () => {
	const [project, setProject] = useState(null)

	const { id } = useParams()

	useEffect(() => {
		setProject(projects[id])
	}, [id]
	)

	if (!project) {
		return <p> Loading... </p>
	}



	const { title, tags, videoSrc, description, keyPoints, futureIdeas, websiteLink, repoLink } = project

	return (
		<div className='flex flex-col min-h-screen my-10 space-y-16 md:space-y-24 lg:space-y-0 md:pb-32 lg:pb-48'>
			<div className='flex flex-col space-y-6 md:space-y-10  '>
				<Headings text={title} />

				<div className='tags flex flex-wrap space-x-4 justify-center text-xs text-secondary tracking-wider md:justify-start lg:ml-10 md:text-sm'>
					{tags.map((tag, index) => (
						<div key={index} className='tag bg-yellow rounded-3xl m-2 border border-secondary'  >
							<p className='px-3 py-1'>{tag}</p>
						</div>
					))}

				</div>
			</div>

			<div className='links flex flex-col items-center space-y-5 md:space-y-10 lg:items-end lg:justify-start lg:mx-20 xl:mx-48'>
				{/* video link here */}
				<div className='video border-5 border-shadow bg-highlight rounded-3xl w-60 h-40 md:w-80 md:h-60 lg:w-96 lg:h-80'></div>

				<div className='buttons flex space-x-5 items-center'>
					<a href={websiteLink}><Button text='Website' /></a>
					<a href={repoLink}><ButtonSecondary text='Code' icon={<FaGithub className='m-1' />} /></a>
				</div>
			</div>

			<div className='flex flex-col items-center p-10 text-center text-secondary space-y-10 lg:w-1/3 lg:mx-40 md:pb-40'>

			{/* about */}
				<ProjectCards 
					title="About the Project"
					titleBgColor="yellow"
					titleTextColor="highlight"
					borderColor="yellow"
					bgColor="highlight"
					>
					<p>{description}</p>
				</ProjectCards>

			{/* Key Features */}
				<ProjectCards 
					title="Key Features"
					titleBgColor="highlight"
					titleTextColor="green"
					borderColor="highlight"
					bgColor="green"
					>
					<ul className='keyPoints mx-auto space-y-4 leading-tight w-3/4'>
					{keyPoints.map((kp, index) => (
						<li key={index}>
							<span className='font-semibold tracking-wide'>{kp.title}<br /></span>{kp.description} </li>
					))}
					</ul>
				</ProjectCards>

			{/* Future Development */}
				<ProjectCards 
					title="Future Development"
					titleBgColor="secondary"
					titleTextColor="highlight"
					borderColor="secondary"
					bgColor="highlight"
					>
					<p className='tracking-tight leading-tight'>{futureIdeas}</p>
				</ProjectCards>



				
			</div>

		</div>
	)
}

export default Project