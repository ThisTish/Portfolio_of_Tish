import React from 'react'

const WorkExperience = () => {

  const jobs = [
    {
      id:1 ,
      place: "United States Postal Service",
      dates: "November.2020 - Presently",
      roles: "Data Conversion | Parcel Post Dist | Expedite"
    },
    {
      id:2 ,
      place: "Threaded Goat",
      dates: "November.2017 - Presently",
      roles: "Owner | Creator of Crochet Goods | SEO"
    },
    {
      id:3 ,
      place: "Vive Juicery",
      dates: "August.2019 - October.2020",
      roles: "Production | Sales Counter | Delivery"
    }
  ]


  return (
    <div className="border-shadow border-8 w-fit px-3 pb-14 -mt-9 -ml-8 rounded-3xl bg-highlight md:mb-52 md:mt-72 md:pr-10 md:-mr-7">
				<h3 className="text-red text-2xl font-sans ml-5 mb-10 lg:text-4xl lg:-mt-10">work_experience</h3>
        <div className="ml-5">
          <div className="text-secondary space-y-7 md:text-end">
          {jobs.map((job) => (
            <div key={job.id} className="ml-5 text-secondary space-y-2">
              <h4 className='font-sans text-lg lg:text-2xl '>{job.place}</h4>
              <p className=" font-light tracking-tight text-sm lg:text-lg">
              {job.dates}
              </p>
              <p className=" font-semibold text-sm lg:text-xl">
              {job.roles}
              </p>
            </div>
            ))}

          </div>
        </div>
		</div>  
  )
}

export default WorkExperience