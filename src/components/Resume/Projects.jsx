import React from 'react'

const Projects = () => {

    const projects = [
      {
        title: "In Or Out",
        languages: "JavaScript | SQL | Express.js | RESTful API",
        description: "Social site for friends and their activities"
      }, 
      {
        title: "Blogology 2.0",
        languages: "Sequelize | Handlebars | Tailwind | Node.js",
        description: "Sleek and simple technology blog"
      },
      {
        title: "Movies & Munchies",
        languages: "GitHub Projects | Third-Party API | HTML | JS",
        description: "A site for planning a night of food & movies"
      }

    ]

  return (


  <div className=" border-highlight bg-primary border-8 w-fit space-y-3 pb-14 -mt-10 -mr-8 ml-6 rounded-3xl md:-mt-5 md:px-36 md:-ml-16 lg:ml-20 lg:-mt-10 lg:pb-24">
    <h3 className="text-red text-2xl font-sans mr-5 flex flex-col items-end md:items-start md:-ml-20 lg:-mt-10 lg:text-4xl">(projects)</h3>
    <div className=" space-y-10 text-center px-10 py-7">

    { projects.map((project) =>(
					
			
      
      <div className=" text-secondary space-y-2">
        <h4 className='font-sans font-xl lg:text-2xl lg:mt-10'><a href='https://in-or-out-6n4t.onrender.com/'>{project.title}</a></h4>
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