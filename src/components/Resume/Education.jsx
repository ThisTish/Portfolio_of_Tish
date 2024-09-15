import React from 'react'

const Education = () => {
  return (
    <div className="border-secondary border-8 w-fit h-fit px-3 pb-14 -mt-9 -ml-8 rounded-3xl bg-highlight md:pb-7 md:-mb-56 md:px-5 lg:-mr-48">
				<h4 className="text-red text-2xl font-sans ml-5 md:pb-5 lg:text-4xl lg:-mt-10">.education()</h4>
        <div className="ml-5 flex flex-col items-end text-secondary space-y-2 py-10 pr-3">
          <h5 className='font-sans font-lg lg:text-2xl'>Full Stack Web Development Certificate</h5>
          <p className=" font-light tracking-tight text-sm lg:text-lg">
            February.2024 - August.2024
          </p>
          <p className=" font-semibold text-sm lg:text-lg">
            UNIVERSITY OF UTAH FULL STACK | <span className='text-nowrap'>Salt Lake City</span>
          </p>
        </div>
		</div>  
  )
}

export default Education