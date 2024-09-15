// import { Link } from 'react-router-dom'
{/* <Link to={`/project/${project.clickId1}`}></Link> */}

const ProjectCards = ({ project }) => {

	return (
		<section className='px-4 space-y-32 mt-32 flex flex-col items-center justify-center md:flex-row md:justify-around md:items-stretch lg:m-32 lg:space-y-48'>
			{/* first card */}
			<div className="flex">

				<div className="text-secondary float bg-highlight rounded-full p-3 mt-20 -mr-14 z-0 md:p-5 h-fit lg:mt-48">
					<a href={project.websiteLink1}><h3 className=" font-extrabold text-sm m-1 md:text-lg md:mr-5 lg:text-2xl" aria-label={`${project.title1}'s site`}>{project.title1}</h3></a>
					<p className="text-xs font-bold md:text-base lg:text-xl ">{project.description1}</p>
					<a className="text-shadow text-xs md:text-base lg:text-lg font-sans tracking-wide" href={project.repoLink1} aria-label={`${project.title1}'s code on GitHub`} >Repo</a>
				</div>
				<div className="bg-yellow w-32 h-32 rounded-full md:min-w-48 md:h-48 lg:min-w-72 lg:h-72">
					<a href={project.websiteLink1}>
						<img src={project.imgSrc1}
							className='w-24 h-24 rounded-full grayscale brightness-100 hover:brightness-100 hover:grayscale-0 transition duration-300 ease-in-out md:w-32 md:h-32 lg:min-w-48 lg:h-48 '
							alt={project.alt1} />
						</a>
				</div>


			</div>
			{/* 2nd card (mirrored) */}
			<div className='flex'>


				<div className="bg-green w-32 h-32 rounded-full flex justify-end items-end md:min-w-48 md:h-48 lg:min-w-72 lg:h-72">
					<a href={project.websiteLink2}>
						<img src={project.imgSrc2} 
						className='w-24 h-24 rounded-full grayscale brightness-90 hover:brightness-100 hover:grayscale-0 transition duration-300 ease-in-out md:w-32 md:h-32 lg:min-w-48 lg:h-48' 
						alt={project.alt2}
						/></a>
				</div>

				<div className="text-secondary bg-highlight py-5 -mt-4 -ml-4 rounded-full px-4 md:-ml-14 md:p-5 h-fit float md:text-end ">
					<p className="text-xs font-semibold md:text-base lg:text-xl">{project.description2}</p>
					<a href={project.websiteLink2}><h3 className=" font-extrabold text-sm m-1 md:text-lg lg:text-2xl" aria-label={`${project.title2}'s site`} >{project.title2}</h3></a>
					<a className="text-shadow text-xs md:text-base lg:text-lg font-sans tracking-wide" href={project.repoLink2} aria-label={`${project.title2}'s code on GitHub`} >Repo</a>
				</div>

			</div>
		</section>
	)
}

export default ProjectCards