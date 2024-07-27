import {FaJsSquare, FaHtml5, FaCss3,
        FaNodeJs, FaReact

 } from 'react-icons/fa'


const Skills = () => {

  const icons = [
    { component: FaJsSquare, className: "text-yellow" },
    { component: FaCss3, className: "text-secondary" },
    { component: FaHtml5, className: "text-red" },
    { component: FaNodeJs, className: "text-green" },
    { component: FaReact, className: "text-secondary" },
  ]


  return (
	<div>

				<div className='flex mx-auto p-7 space-x-5 md:hidden'>
          {icons.map(({ component: Icon, className}, index) =>(
            <Icon key={index} className={`inline m-1 text-7xl ${className}`} />
          ))}
			</div>
				<div className='md:flex flex-col mt-60 mx-36 space-y-12 hidden'>
          {icons.map(({ component: Icon, className}, index) =>(
            <Icon key={index} className={`inline m-1 text-7xl ${className}`} />
          ))}
			</div>

  </div>


  )
}

export default Skills