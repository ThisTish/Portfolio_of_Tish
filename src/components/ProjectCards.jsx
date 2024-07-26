

const ProjectCards = ({project}) => {
  // const project = projects.project
  return (
    <section className='px-4 space-y-32 mt-32 flex flex-col items-center justify-center md:flex-row md:justify-around md:items-stretch lg:m-32 lg:space-y-48'>
      {/* first card */}
      <div className="flex">
      
        <div className="text-secondary flex flex-col mt-20 -mr-12 z-10 lg:mt-48">
          <h4 className=" font-extrabold text-sm m-1 md:text-lg md:mr-5 lg:text-2xl">{project.title1}</h4>
          <p className="text-xs font-bold md:text-base lg:text-xl ">{project.description1}</p>
        </div>
      <div className="bg-yellow w-32 h-32 rounded-full md:min-w-48 md:h-48 lg:min-w-72 lg:h-72">
          <img src={project.imgSrc1} className='w-24 h-24 rounded-full grayscale brightness-100 hover:brightness-100 hover:grayscale-0 transition duration-300 ease-in-out md:w-32 md:h-32 lg:min-w-48 lg:h-48 ' />
      </div>

        <div className="text-red text-sm font-bold flex flex-col items-end -ml-8 md:text-lg lg:text-2xl">
            <a  className="font-sans tracking-wide"href={project.websiteLink1}>Website</a>
            <a  className="font-sans tracking-wide"href={project.repoLink1}>Repo</a>

        </div>
      
      </div>
      {/* 2nd card (mirrored) */}
      <div className='flex'>

      <div className="text-red text-sm font-bold flex flex-col justify-end -mr-8 z-10 md:text-lg lg:text-2xl">
            <a  className="font-sans tracking-wide"href={project.repoLink2}>Repo</a>
          <a  className="font-sans tracking-wide"href={project.websiteLink2}>Website</a>
        </div>

        <div className="bg-green w-32 h-32 rounded-full flex justify-end items-end md:min-w-48 md:h-48 lg:min-w-72 lg:h-72">
          <img src={project.imgSrc2} className='w-24 h-24 rounded-full grayscale brightness-90 hover:brightness-100 hover:grayscale-0 transition duration-300 ease-in-out md:w-32 md:h-32 lg:min-w-48 lg:h-48' />
        </div>

        <div className="text-secondary flex flex-col md:text-end mt-5 ">
          <p className="text-xs font-semibold md:text-base lg:text-xl">{project.description2}</p>
          <h4 className=" font-extrabold text-sm m-1 md:text-lg lg:text-2xl">{project.title2}</h4>
        </div>

      </div>
    </section>
  )
}

export default ProjectCards