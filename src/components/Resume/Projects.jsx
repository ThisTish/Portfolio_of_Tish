import React from 'react'

const Projects = () => {

    const projects = [
      {
        id: 1,
        title: "In Or Out",
        languages: "JavaScript | SQL | Express.js | RESTful API",
        description: "Social site for friends and their activities",
        url: "https://in-or-out-6n4t.onrender.com/"
      }, 
      {
        id: 2,
        title: "Blogology 2.0",
        languages: "Sequelize | Handlebars | Tailwind | Node.js",
        description: "Sleek and simple technology blog",
        url: "https://blogology2-0.onrender.com/"
      },
      {
        id: 3,
        title: "Game Galaxxy",
        languages: "Graphql | JWT Token | Third-Party API | React",
        description: "A site to save, share, and rate gaming tutorials",
        url: "https://game-galaxxy.onrender.com/"
      }

    ]

  return (


  <div className=" border-highlight bg-green border-8 w-fit space-y-3 pb-14 -mt-10 -mr-8 ml-6 rounded-3xl md:-mt-5 md:px-36 md:-ml-16 lg:ml-20 lg:-mt-10 lg:pb-24">
    <h3 className="text-red text-2xl font-sans mr-5 flex flex-col items-end md:items-start md:-ml-20 lg:-mt-10 lg:text-4xl">(projects)</h3>
    <div className=" space-y-16 text-center px-10 py-7" >

    { projects.map((project) =>(
					
			
      
      <div key={project.id} className=" text-highlight space-y-2">
        <h4 className='font-sans font-xl lg:text-2xl lg:mt-10'><a href={project.url}>{project.title}</a></h4>
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