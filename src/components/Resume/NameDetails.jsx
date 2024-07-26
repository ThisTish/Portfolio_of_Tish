import React from 'react'

const NameDetails = () => {
  return (
    <div className="h-fit w-fit border-green border-8 px-3 pb-20 mt-10 -ml-5 rounded-3xl bg-highlight">
      <h1 className="text-red text-5xl font-bold flex -mt-7 p-3 ">Tish Sirface</h1>

      <div className='flex flex-col text-secondary items-end md:ml-16 md:mr-3'>
        <p className=" font-semibold mt-7">
          tish.sirface@gmail.com
        </p>
        <p className=" font-light mt-5 text-nowrap">
        801.309.7471 | Salt Lake City.UT
        </p>
        <p className=" font-sans mt-7">
          <a href='https://github.com/ThisTish'>GitHub</a> | <a href='https://www.linkedin.com/in/tishsirface'>LinkedIn</a>
        </p>
      </div>
    </div>
  )
}

export default NameDetails