

const ProjectCards = ({project}) => {
  // const project = projects.project
  return (
    <section className='px-4 space-y-9 mt-16 flex flex-col items-center justify-center'>
      {/* first card */}
      <div className="flex">
      
        <div className="text-secondary flex flex-col mt-16 -mr-16 z-10">
          <h4 className=" font-extrabold text-sm m-1">{project.title1}</h4>
          <p className="text-xs font-bold ">{project.description1}</p>
        </div>
      <div className="bg-yellow w-32 h-32 rounded-full">
          <img src={project.imgSrc1} className='w-20 h-20 rounded-full grayscale brightness-150 hover:brightness-100 hover:grayscale-0 transition duration-300 ease-in-out' />
      </div>

        <div className="text-red text-sm font-bold flex flex-col items-end -ml-12">
            <a  className="font-sans tracking-wide"href={project.websiteLink1}>Website</a>
            <a  className="font-sans tracking-wide"href={project.repoLink1}>Repo</a>

        </div>
      
      </div>
      {/* 2nd card (mirrored) */}
      <div className='flex'>

      <div className="text-red text-sm font-bold flex flex-col justify-end -mr-12 z-10">
            <a  className="font-sans tracking-wide"href={project.repoLink2}>Repo</a>
          <a  className="font-sans tracking-wide"href={project.websiteLink2}>Website</a>
        </div>

        <div className="bg-green w-32 h-32 rounded-full flex justify-end items-end">
          <img src={project.imgSrc2} className='w-20 h-20 rounded-full grayscale brightness-150 hover:brightness-100 hover:grayscale-0 transition duration-300 ease-in-out' />
        </div>

        <div className="text-secondary flex flex-col mt-5 items-end -ml-26 ">
          <p className="text-xs font-semibold">{project.description2}</p>
          <h4 className=" font-extrabold text-sm m-1">{project.title2}</h4>
        </div>

      </div>
    </section>
  )
}

export default ProjectCards