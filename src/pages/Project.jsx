import { Link, redirect, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Button from '../components/Utils/Button'
import ButtonSecondary from '../components/Utils/ButtonSecondary'
import Headings from '../components/Utils/Headings'
import ProjectCards from '../components/projectElements/ProjectCards'
import { FaGithub } from 'react-icons/fa'
import projects from '../data/projectPages.json'


const Project = () => {

	const [project, setProject] = useState(null)
	const [index, setIndex] = useState(null)
	const [prevName, setPrevName] = useState(null)
	const [nextName, setNextName] = useState(null)

	const { name } = useParams()
	useEffect(() => {
		const foundProject = projects.find((project) => project.title === name);
		setProject(foundProject)

		const projectIndex = projects.findIndex((project) => project.title === name);
		if (projectIndex !== -1) {
			const prevIndex = (projectIndex - 1 + projects.length) % projects.length;
			const nextIndex = (projectIndex + 1) % projects.length;
			setPrevName(projects[prevIndex].title);
			setNextName(projects[nextIndex].title);
		}
		
	}, [name])

	if (!project) {
		return <p> Loading... </p>
	}

	const scrollToTop = () => {
		window.scrollTo({
		  top: 0,
		  behavior: "smooth"
		});
	  };

	const { title, tags, videoSrc, description, keyPoints, futureIdeas, websiteLink, repoLink, videoLink } = project


	return (
		<div className='flex flex-col min-h-screen my-10 space-y-16 md:space-y-24 lg:space-y-0 md:pb-32 lg:pb-48 xl:space-y-20'>
			<div className='flex flex-col space-y-6 md:space-y-10 lg:space-y-20 '>
				<Headings text={title} />

				<div className='tags flex flex-wrap space-x-4 justify-center text-xs text-highlight tracking-wider md:justify-start lg:ml-10 md:text-sm lg:text-base'>
					{tags.map((tag, index) => (
						<div key={index} className='tag bg-red rounded-3xl m-2 border border-highlight'  >
							<p className='px-3 py-1'>{tag}</p>
						</div>
					))}

				</div>
			</div>


			{/* small & xl video section */}
			<div className='links flex flex-col items-center space-y-5 md:space-y-10 lg:hidden xl:flex xl:items-center'>
				<iframe
					src={videoLink}
					allowFullScreen
					className='rounded-3xl border-4 border-secondary grow-1 w-3/4 h-auto lg:w- xl:w-1/2 aspect-video'
				>
				</iframe>

				<div className='buttons flex space-x-5 items-center'>
					<a href={repoLink} target="_blank" rel="noopener noreferrer" aria-label={`${title} GitHub repository`}><ButtonSecondary text='Code' icon={<FaGithub className='m-1' />} /></a>
					<a href={websiteLink} target="_blank" rel="noopener noreferrer" aria-label={title}><Button text='Website' /></a>
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
						src={videoLink}
						allowFullScreen
						className='my-28 mr-10 rounded-3xl border-4 border-secondary w-full aspect-video'
						aria-label='Walkthrough of the project'
					>
					</iframe>
					<div className='buttons flex space-x-5 items-center'>
						<a href={repoLink} target="_blank" rel="noopener noreferrer" aria-label={`${title} GitHub repository`}><ButtonSecondary text='Code' icon={<FaGithub className='m-1' />} /></a>
						<a href={websiteLink} target="_blank" rel="noopener noreferrer" aria-label={title}><Button text='Website' /></a>
					</div>
				</div>

			</div>
			<div className="flex justify-between">
				{prevName && (
					<Link to={`/project/${prevName}`} className='flex items-center' >
						<Button text='Previous Project'  onClick={scrollToTop} />
					</Link>
				)}
				<Link to='/portfolio' className='flex items-center'>
					<ButtonSecondary text=' Back to Projects' onClick={scrollToTop} />
				</Link>
				{nextName && (
					<Link to={`/project/${nextName}`} className='flex items-center' >
						<Button text='Next Project' onClick={scrollToTop} />
					</Link>
				)}
			</div>
		</div>
	)
}

export default Project