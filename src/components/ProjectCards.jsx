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
					to={`/project/${project.clickId1}`}>
					<button
						className="size-20 text-center bg-red opacity-80 text-highlight absolute bottom-0 -left-4 rounded-full flex z-20 items-center border-2 border-highlight lg:size-24 lg: lg:text-xl lg:px-3 hover:opacity-100 hover:border-red hover:bg-highlight hover:text-red hover:scale-105 transition-transform ease-in duration-300 focus:outline-none focus:scale-105 focus:opacity-100"
						onClick={() => window.scrollTo(0, 0)}>
						View Project</button></Link>

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
					to={`/project/${project.clickId2}`}>
					<button
						className="size-20 text-center bg-red opacity-80 text-highlight absolute top-0 -right-4 rounded-full flex z-10 items-center border-2 border-highlight lg:size-24  lg:text-xl lg:px-3 hover:opacity-100 hover:border-red hover:bg-highlight hover:text-red hover:scale-105 transition-transform ease-in duration-300 focus:outline-none focus:scale-105 focus:opacity-100"
						onClick={() => window.scrollTo(0, 0)}>
						View Project</button></Link>

				<div className="bg-highlight opacity-80 border-secondary border-4 size-40 absolute bottom-4 -right-10 z-10 flex text-center flex-col justify-center rounded-full lg:size-48 lg:bottom-0 lg:text-xl">
					<h3 className="ml-4" aria-label={`${project.title2}'s site`} >{project.title2}</h3>
					<p className="">{project.description2}</p>
				</div>

			</div>
		</section>


	)
}

export default ProjectCards