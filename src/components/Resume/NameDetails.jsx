import React from 'react'

const NameDetails = () => {
  return (
    <div className="h-fit w-fit border-green border-8 px-3 pb-20 mt-10 -ml-5 rounded-3xl bg-highlight lg:mr-20">
      <h3 className="text-red text-5xl font-bold flex -mt-7 p-3 lg:text-7xl lg:-mt-20 ">Tish Sirface</h3>

      <div className='flex flex-col text-secondary items-end md:ml-16 md:mr-3'>
        <p className=" font-semibold mt-7 lg:text-xl">
          tish.sirface@gmail.com
        </p>
        <p className=" font-light mt-5 text-nowrap lg:text-lg">
        801.309.7471 | Salt Lake City.UT
        </p>
        <p className=" font-sans mt-7 lg:text-xl">
          <a href='https://github.com/ThisTish'aria-label='GitHub profile' target="_blank" rel="noopener noreferrer" >GitHub</a> | <a href='https://www.linkedin.com/in/tishsirface'aria-label='LinkedIn profile' target="_blank" rel="noopener noreferrer" >LinkedIn</a>
        </p>
      </div>
    </div>
  )
}

export default NameDetails