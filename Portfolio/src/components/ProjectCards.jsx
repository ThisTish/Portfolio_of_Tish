import inOrOutPic from '../assets/images/InOrOut.png'
import blogologyPic from '../assets/images/BlogologyPic.png'


const ProjectCards = () => {
  return (
    <section className='px-4 space-y-9 mt-16 flex flex-col items-center justify-center'>
      {/* first card */}
      <div className="flex">
      
        <div className="text-secondary flex flex-col mt-16 -mr-16 z-10">
          <h4 className=" font-extrabold text-sm m-1">In Or Out</h4>
          <p className="text-xs font-bold ">Social Site for Gatherings</p>
        </div>
      <div className="bg-yellow w-32 h-32 rounded-full">
          <img src={inOrOutPic} alt="In Or Out playful logo" className='w-20 h-20 rounded-full grayscale brightness-150 hover:brightness-100 hover:grayscale-0 transition duration-300 ease-in-out' />
      </div>

        <div className="text-red text-sm font-semibold flex flex-col items-end -ml-12">
            <a href="https://in-or-out-6n4t.onrender.com/">Website</a>
            <a href="https://github.com/Sean-K-Madigan/In-Or-Out">Repo</a>

        </div>
      
      </div>
      {/* 2nd card (mirrored) */}
      <div className='flex'>

      <div className="text-red text-sm font-semibold flex flex-col justify-end -mr-12 z-10">
            <a href="https://github.com/Sean-K-Madigan/In-Or-Out">Repo</a>
          <a href="https://blogology2-0.onrender.com">Website</a>
        </div>

        <div className="bg-green w-32 h-32 rounded-full flex justify-end items-end">
          <img src={blogologyPic} alt="In Or Out playful logo" className='w-20 h-20 rounded-full grayscale brightness-150 hover:brightness-100 hover:grayscale-0 transition duration-300 ease-in-out' />
        </div>

        <div className="text-secondary flex flex-col mt-5 items-end -ml-16 ">
          <p className="text-xs font-semibold">Social Site for Gatherings</p>
          <h4 className=" font-extrabold text-sm m-1">In Or Out</h4>
        </div>

      </div>
    </section>
  )
}

export default ProjectCards