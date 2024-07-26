import React from 'react'

const WorkExperience = () => {

  const jobs = [
    {
      place: "United States Postal Service",
      dates: "November.2020 - Presently",
      roles: "Data Conversion | Parcel Post Dist | Expedite"
    },
    {
      place: "Threaded Goat",
      dates: "November.2017 - Presently",
      roles: "Owner | Creator of Crochet Goods | SEO"
    },
    {
      place: "Vive Juicery",
      dates: "August.2019 - October.2020",
      roles: "Production | Sales Counter | Delivery"
    }
  ]


  return (
    <div className="border-shadow border-8 w-fit px-3 pb-14 -mt-9 -ml-8 rounded-3xl bg-highlight md:mb-52">
				<h3 className="text-red text-2xl font-sans ml-5 -mt-3 mb-10">work_experience</h3>
        <div className="ml-5">
          <div className="text-secondary space-y-7">
          {jobs.map((job) => (
            <div className="ml-5 text-secondary space-y-2">
              <h4 className='font-sans font-lg '>{job.place}</h4>
              <p className=" font-light tracking-tight text-sm">
              {job.dates}
              </p>
              <p className=" font-semibold text-sm">
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