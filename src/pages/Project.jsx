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
		<div className='flex flex-col min-h-screen my-10 space-y-16 md:space-y-24 lg:space-y-0 md:pb-32 lg:pb-48 xl:space-y-20'>
			<div className='flex flex-col space-y-6 md:space-y-10 lg:space-y-20 '>
				<Headings text={title} />

				<div className='tags flex flex-wrap space-x-4 justify-center text-xs text-secondary tracking-wider md:justify-start lg:ml-10 md:text-sm lg:text-base'>
					{tags.map((tag, index) => (
						<div key={index} className='tag bg-yellow rounded-3xl m-2 border border-secondary'  >
							<p className='px-3 py-1'>{tag}</p>
						</div>
					))}

				</div>
			</div>


			{/* small & xl video section */}
			<div className='links flex flex-col items-center space-y-5 md:space-y-10 lg:hidden xl:flex xl:items-center'>
				<iframe
					src="https://www.loom.com/embed/82572b095d7e4488b326c7e3b073fe45?sid=0401ce26-92d9-4e25-bb76-4b5af3bcdeca"
					allowfullscreen
					className='rounded-3xl border-4 border-secondary grow-1 w-3/4 h-auto lg:w- xl:w-1/2 aspect-video'
				>
				</iframe>

				<div className='buttons flex space-x-5 items-center'>
					<a href={repoLink} aria-label={`${title} GitHub repository`}><ButtonSecondary text='Code' icon={<FaGithub className='m-1' />} /></a>
					<a href={websiteLink} aria-label={title}><Button text='Website' /></a>
				</div>
			</div>


			<div className="flex justify-between">
				<div className='flex flex-col items-center p-10 text-center text-secondary gap-10 md:pb-40 lg:w-1/2 xl:w-full xl:flex-row xl:items-end'>

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
						<ul className=' keyPoints mx-auto gap-10 leading-tight w-3/4 md:w-auto md:flex'>
							{keyPoints.map((kp, index) => (
								<li key={index} className='text-highlight space-y-3'>
									<span className='font-semibold'>{kp.title}</span> <p className="tracking-tight">{kp.description}</p> </li>
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


				{/* large video section */}
				<div className=' hidden lg:flex flex-col w-1/2 items-center space-y-5 xl:hidden'>
					<iframe
						src="https://www.loom.com/embed/82572b095d7e4488b326c7e3b073fe45?sid=0401ce26-92d9-4e25-bb76-4b5af3bcdeca"
						allowfullscreen
						className='my-28 mr-10 rounded-3xl border-4 border-secondary w-full aspect-video'
					>
					</iframe>
					<div className='buttons flex space-x-5 items-center'>
						<a href={repoLink} aria-label={`${title} GitHub repository`}><ButtonSecondary text='Code' icon={<FaGithub className='m-1' />} /></a>
						<a href={websiteLink} aria-label={title}><Button text='Website' /></a>
					</div>
				</div>


			</div>

		</div>
	)
}

export default Project