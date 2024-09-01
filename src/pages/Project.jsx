import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Button from '../components/Utils/Button'
import ButtonSecondary from '../components/Utils/ButtonSecondary'
import Headings from '../components/Utils/Headings'
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
		<div className='page flex flex-col m-10 space-y-16 md:space-y-24 lg:space-y-0 md:pb-32 lg:pb-48'>
			<div className='flex flex-col space-y-6 md:space-y-10 lg:space-y-24'>
				<Headings text={title} />

				<div className='tags flex flex-wrap space-x-4 justify-center text-xs text-secondary tracking-wider md:justify-start lg:ml-10 md:text-sm'>
					{tags.map((tag, index) =>(
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
					<a href={websiteLink}><Button text='Website'/></a>
					<a href={repoLink}><ButtonSecondary text='Code' icon={<FaGithub className='m-1' />} /></a>
				</div>
			</div>

			<div className='paragraph flex flex-col items-center p-10 text-center text-secondary space-y-10 lg:w-1/3 lg:absolute lg:top-2/3 md:pb-40'>
				<p className='bg-highlight border-4 border-yellow rounded-3xl p-4'>{description}</p>

				<div className='bg-green px-3 text-highlight border-4 border-highlight rounded-3xl py-4 space-y-1 '>
					<h3>Key Features</h3>
					<ul className='keyPoints'>
						{keyPoints.map((kp, index) => (
							<li key={index}>{kp}</li>
						))}
					</ul>
				</div>

				<div className='bg-highlight border-4 border-secondary p-4 rounded-3xl'>
					<h3 className='text-red'>Future Development</h3>
					<p>{futureIdeas}</p>
				</div>
			</div>

		</div>
	)
}

export default Project