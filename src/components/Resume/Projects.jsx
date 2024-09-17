import React from 'react'

const Projects = () => {

    const projects = [
      {
        id: 1,
        title: "In Or Out",
        languages: "JavaScript | SQL | Express.js | RESTful API",
        description: "Social site for friends and their activities",
        url: "https://in-or-out-6n4t.onrender.com/",
        clickId:"2"
      }, 
      {
        id: 2,
        title: "Blogology 2.0",
        languages: "Sequelize | Handlebars | Tailwind | Node.js",
        description: "Sleek and simple technology blog",
        url: "https://blogology2-0.onrender.com/",
        clickId: "1"
      },
      {
        id: 3,
        title: "Game Galaxxy",
        languages: "Graphql | JWT Token | Third-Party API | React",
        description: "A site to save, share, and rate gaming tutorials",
        url: "https://game-galaxxy.onrender.com/",
        clickId: "0"
      }

    ]

  return (


  <div className=" border-highlight bg-green border-8 w-fit space-y-3 pb-14 -mt-10 -mr-8 ml-6 rounded-3xl md:-mt-5 md:px-36 md:-ml-16 lg:ml-20 lg:-mt-10 lg:pb-24">
    <h4 className="ml-5 mt-3 text-2xl font-sans flex flex-col text-highlight items-start md:items-center md:ml-0 md:pb-5 lg:items-start lg:-ml-20 lg:-mt-12 lg:text-red lg:text-4xl">(projects)</h4>
    <div className=" space-y-16 text-center px-10 py-7" >

    { projects.map((project) =>(
					
			
      
      <div key={project.id} className=" text-highlight space-y-2">
        <h5 className='font-sans font-xl lg:text-2xl lg:mt-10' aria-label={project.title}><a href={`/project/${project.clickId}`}>{project.title}</a></h5>
        <p className=" font-light tracking-tight text-sm lg:text-lg">
          {project.languages}
        </p>
        <p className=" font-semibold text-sm lg:text-xl">
          {project.description}
        </p>
      </div>
        ) 
      )}
      

  </div>
</div>
  )
}

export default Projects