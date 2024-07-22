import React from 'react'

const Projects = () => {
  return (
  <div className="container border-highlight bg-primary border-8 w-fit space-y-3 px-3 pb-14 -mt-7 -mr-8 ml-6 rounded-3xl ">
    <h3 className="text-red text-2xl font-sans mr-5 -mt-3 flex flex-col items-end">(projects)</h3>
    <div className="mr-5 space-y-5">
      
      <div className="mr-5 text-secondary space-y-2">
        <h4 className='font-sans font-lg '><a href='https://in-or-out-6n4t.onrender.com/'>In  Or Out</a></h4>
        <p className=" font-light tracking-tight text-sm">
          JavaScript | SQL | Express.js | RESTful API
        </p>
        <p className=" font-semibold text-sm">
          Social site for friends and their activities
        </p>
      </div>

      <div className="mr-5 text-secondary space-y-2">
        <h4 className='font-sans font-lg '><a href='https://github.com/ThisTish/Blogology2.0'>Blogology 2.0</a></h4>
        <p className=" font-light tracking-tight text-sm">
        Sequelize | Handlebars | Tailwind | Node.js
        </p>
        <p className=" font-semibold text-sm">
          Sleek and simple technology blog
        </p>
      </div>

      <div className="mr-5 text-secondary space-y-2">
        <h4 className='font-sans font-lg '><a href='https://thistish.github.io/Movies-n-Munchies/'>Movies & Munchies</a></h4>
        <p className=" font-light tracking-tight text-sm">
        GitHub Projects | Third-Party API | HTML | JS
        </p>
        <p className=" font-semibold text-sm">
          A site for planning a night of food & movies
        </p>
      </div>
  </div>
</div>
  )
}

export default Projects