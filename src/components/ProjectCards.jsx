// import { Link } from 'react-router-dom'
{/* <Link to={`/project/${project.clickId1}`}></Link> */ }


const ProjectCards = ({ project }) => {

	return (
		<section className='flex flex-col gap-52 md:gap-80 md:-mb-36 md:flex-row justify-center items-center'>
			{/* first card */}
			<div className="flex flex-col justify-start relative">

				<div className="bg-highlight border-secondary border-4 size-40 absolute top-4 -left-10 z-10 flex text-center flex-col justify-center rounded-full  ">
					<h3 className="" aria-label={`${project.title1}`}>{project.title1}</h3>
					<p className="">{project.description1}</p>
				</div>
				<a
					href={`/project/${project.clickId1}`}
					className="size-20 text-center bg-red text-highlight absolute bottom-0 -left-4 rounded-full flex z-20 items-center border-2 border-highlight"
				>View Project</a>

				<div className="size-80 bg-yellow rounded-full relative shadow-md shadow-highlight">
					<img src={project.imgSrc1}
						className='rounded-full size-60 shadow-shadow shadow-md absolute bottom-2 right-2 z-20 '
						alt={project.alt1} />

				</div>

			</div>
			{/* 2nd card (mirrored) */}
			<div className='flex flex-col md:flex-row justify-end relative md:mt-[700px]'>

				<div className="size-80 bg-green rounded-full relative shadow-md shadow-highlight ">

					<img src={project.imgSrc2}
						className='rounded-full size-60 shadow-shadow z-20 shadow-md absolute top-2 left-2 z-20grayscale-100 hover:grayscale-0'
						alt={project.alt2}
					/>
				</div>

				<a
					href={`/project/${project.clickId1}`}
					className="size-20 text-center bg-red text-highlight absolute bottom-0 -left-4 rounded-full flex z-10 items-center border-2 border-highlight"
				>View Project</a>

				<div className="bg-highlight border-secondary border-4 size-40 absolute bottom-4 -right-10 z-10 flex text-center flex-col justify-center rounded-full">
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