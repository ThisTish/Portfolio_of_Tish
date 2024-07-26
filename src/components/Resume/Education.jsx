import React from 'react'

const Education = () => {
  return (
    <div className="border-secondary border-8 w-fit h-fit px-3 pb-14 -mt-9 -ml-8 rounded-3xl bg-highlight md:pl-3">
				<h3 className="text-red text-2xl font-sans ml-5 -mt-3">.education()</h3>
        <div className="ml-5 flex flex-col items-end text-secondary space-y-2 py-10 pr-3">
          <h4 className='font-sans font-lg '>Full Stack Web Development Certificate</h4>
          <p className=" font-light tracking-tight text-sm">
            February.2024 - August.2024
          </p>
          <p className=" font-semibold text-sm">
            UNIVERSITY OF UTAH FULL STACK | <span className='text-nowrap'>Salt Lake City</span>
          </p>
        </div>
		</div>  
  )
}

export default Education