import { Link } from 'react-router-dom'


const ProjectCards = ({ project }) => {

	return (
		<section className='flex flex-col gap-52 lg:gap-0 lg:-mb-36 lg:flex-row lg:justify-around justify-center items-center'>
			{/* first card */}
			<div className="flex flex-col justify-start relative">

				<div className="bg-highlight opacity-80 border-secondary border-4 size-40 absolute top-4 -left-10 z-10 flex text-center flex-col justify-center rounded-full lg:size-48 lg:top-0 lg:text-xl ">
					<h3 className="" aria-label={`${project.title1}`}>{project.title1}</h3>
					<p className="">{project.description1}</p>
				</div>
				<Link
					to={`/project/${project.clickId1}`}
					className="size-20 text-center bg-red opacity-80 text-highlight absolute bottom-0 -left-4 rounded-full flex z-20 items-center border-2 border-highlight lg:size-24 lg: lg:text-xl lg:px-3 hover:opacity-100 hover:border-red hover:bg-highlight hover:text-red hover:scale-105 transition-transform ease-in duration-300 focus:outline-none focus:scale-105 focus:opacity-100"
				>View Project</Link>

				<div className="size-80 bg-yellow rounded-full relative shadow-md shadow-highlight lg:size-96">
					<img src={project.imgSrc1}
						className='rounded-full size-60 shadow-shadow shadow-md absolute bottom-2 right-2 z-20 lg:size-72'
						alt={project.alt1} />

				</div>

			</div>
			{/* 2nd card (mirrored) */}
			<div className='flex flex-col lg:flex-row justify-end relative lg:mt-[700px]'>

				<div className="size-80 bg-green rounded-full relative shadow-md shadow-highlight lg:size-96 ">

					<img src={project.imgSrc2}
						className='rounded-full size-60 shadow-shadow z-20 shadow-md absolute top-2 left-2 lg:size-72'
						alt={project.alt2}
					/>
				</div>

				<Link
					to={`/project/${project.clickId2}`}
					className="size-20 text-center bg-red opacity-80 text-highlight absolute top-0 -right-4 rounded-full flex z-10 items-center border-2 border-highlight lg:size-24  lg:text-xl lg:px-3 hover:opacity-100 hover:border-red hover:bg-highlight hover:text-red hover:scale-105 transition-transform ease-in duration-300 focus:outline-none focus:scale-105 focus:opacity-100"
				>View Project</Link>

				<div className="bg-highlight opacity-80 border-secondary border-4 size-40 absolute bottom-4 -right-10 z-10 flex text-center flex-col justify-center rounded-full lg:size-48 lg:bottom-0 lg:text-xl">
					<h3 className="ml-4" aria-label={`${project.title2}'s site`} >{project.title2}</h3>
					<p className="">{project.description2}</p>
				</div>

			</div>
		</section>

		// <section className='px-4 space-y-32 mt-32 flex flex-col items-center justify-center md:flex-row md:justify-around md:items-stretch lg:m-32 lg:space-y-48'>
		// 	{/* first card */}
		// 	<div className="flex">

		// 		<div className="text-secondary float bg-highlight border-2 border-secondary shadow-md hover:scale-110 focus:bg-secondary focus:text-highlight rounded-full p-3 mt-20 -mr-14 z-0 md:p-5 h-fit lg:mt-48">
		// 		<a href={`/project/${project.clickId1}`}><h3 className=" font-extrabold text-sm m-1 md:text-lg md:mr-5 lg:text-2xl" aria-label={`${project.title1}`}>{project.title1}</h3></a>
		// 			<p className="text-xs font-bold md:text-base lg:text-xl ">{project.description1}</p>
		// 			{/* <a className="text-shadow text-xs md:text-base lg:text-lg font-sans tracking-wide" href={project.websiteLink1} aria-label={`${project.title1}'s website`} >Website</a> */}
		// 		</div>
		// 		<div className="bg-yellow w-32 h-32 rounded-full shadow-highlight shadow-sm md:min-w-48 md:h-48 lg:min-w-72 lg:h-72">
		// 			<a href={`/project/${project.clickId1}`}>
		// 				<img src={project.imgSrc1}
		// 					className='w-24 h-24 rounded-full shadow-red shadow-md grayscale brightness-100 hover:shadow-none hover:grayscale-0 hover:scale-110 focus:grayscale-0 transition duration-300 ease-in-out md:w-32 md:h-32 lg:min-w-48 lg:h-48 '
		// 					alt={project.alt1} />
		// 				</a>
		// 		</div>


		// 	</div>
		// 	{/* 2nd card (mirrored) */}
		// 	<div className='flex'>


		// 		<div className="bg-green w-32 h-32 rounded-full shadow-highlight shadow-sm flex justify-end items-end md:min-w-48 md:h-48 lg:min-w-72 lg:h-72">
		// 		<a href={`/project/${project.clickId2}`}>
		// 				<img src={project.imgSrc2} 
		// 				className='w-24 h-24 rounded-full shadow-red shadow-md grayscale brightness-100 hover:shadow-none hover:grayscale-0 hover:scale-110 focus:grayscale-0 transition duration-300 ease-in-out md:w-32 md:h-32 lg:min-w-48 lg:h-48' 
		// 				alt={project.alt2}
		// 				/></a>
		// 		</div>

		// 		<div className="text-secondary bg-highlight border-2 border-secondary shadow-md hover:scale-110 focus:bg-secondary focus:text-highlight py-5 -mt-4 -ml-4 rounded-full px-4 md:-ml-14 md:p-5 h-fit float md:text-end ">
		// 			<p className="text-xs font-semibold md:text-base lg:text-xl">{project.description2}</p>
		// 			<a href={`/project/${project.clickId2}`}><h3 className=" font-extrabold text-sm m-1 md:text-lg lg:text-2xl" aria-label={`${project.title2}'s site`} >{project.title2}</h3></a>
		// 			{/* <a className="text-shadow text-xs md:text-base lg:text-lg font-sans tracking-wide" href={project.repoLink2} aria-label={`${project.title2}'s code on GitHub`} >Repo</a> */}
		// 		</div>

		// 	</div>
		// </section>
	)
}

export default ProjectCards