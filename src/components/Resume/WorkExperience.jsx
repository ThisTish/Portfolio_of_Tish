import React from 'react'

const WorkExperience = () => {
  return (
    <div className="container border-secondary border-8 w-fit space-y-3 px-3 pb-14 -mt-9 -ml-8 rounded-3xl bg-highlight">
				<h3 className="text-red text-2xl font-sans ml-5 -mt-3">work_experience</h3>
        <div className="ml-5">
          <div className="text-secondary space-y-5">

            <div className="ml-5 flex flex-col items-end text-secondary space-y-2">
              <h4 className='font-sans font-lg '>United States Postal Service</h4>
              <p className=" font-light tracking-tight text-sm">
              November.2020 - Presently
              </p>
              <p className=" font-semibold text-sm">
              Data Conversion | Parcel Post Dist | Expedite
              </p>
            </div>

            <div className="ml-5 flex flex-col items-end text-secondary space-y-2">
          <h4 className='font-sans font-lg '>Threaded Goat</h4>
          <p className=" font-light tracking-tight text-sm">
            November.2017 - Presently
          </p>
          <p className=" font-semibold text-sm">
          Owner | Creator of Crochet Goods | SEO
          </p>
        </div>

        <div className="ml-5 flex flex-col items-end text-secondary space-y-2">
          <h4 className='font-sans font-lg '>Vive Juicery</h4>
          <p className=" font-light tracking-tight text-sm">
            August.2019 - October.2020
          </p>
          <p className=" font-semibold text-sm">
            Production | Sales Counter
          </p>
        </div>
          </div>
        </div>
		</div>  
  )
}

export default WorkExperience