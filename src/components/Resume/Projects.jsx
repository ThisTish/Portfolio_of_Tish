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


  <div className=" border-highlight bg-primary border-8 w-fit space-y-3 pb-14 -mt-10 -mr-8 ml-6 rounded-3xl md:-mt-5 md:px-20 ">
    <h3 className="text-red text-2xl font-sans mr-5 -mt-3 flex flex-col items-end">(projects)</h3>
    <div className=" space-y-10 text-center px-10 py-7">

    { projects.map((project) =>(
					
			
      
      <div className=" text-secondary space-y-2">
        <h4 className='font-sans font-xl '><a href='https://in-or-out-6n4t.onrender.com/'>{project.title}</a></h4>
        <p className=" font-light tracking-tight text-sm">
          {project.languages}
        </p>
        <p className=" font-semibold text-sm">
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