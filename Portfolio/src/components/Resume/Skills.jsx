import {FaJsSquare, FaHtml5, FaCss3,
        FaNodeJs, FaReact, FaDatabase,

 } from 'react-icons/fa'


const Skills = () => {
  return (
	<div>
    <div className=" border-shadow border-8 rounded-3xl bg-primary space-y-3 px-3 pb-14 -mt-7 -mr-10 -ml-2">
				<h3 className="text-red text-2xl font-sans flex justify-center -mt-3">5k!llz</h3>
				<div className='relative p-5'>
          <FaJsSquare  className="inline m-1 text-7xl text-yellow absolute top-0 left-2"/>
          <FaCss3  className="inline m-1 text-lg text-secondary absolute top-5 left-28"/>
          <FaHtml5  className="inline m-1 text-5xl text-red absolute top-7 left-32"/>
          <FaNodeJs  className="inline m-1 text-6xl text-green absolute top-0 right-32"/>
          <FaReact  className="inline m-1 text-4xl text-secondary absolute top-9 right-24"/>
          <FaDatabase  className="inline m-1 text-3xl text-highlight p-1 bg-shadow rounded-lg absolute top-3 right-12"/>
				</div>
			</div>
  </div>
  )
}

export default Skills