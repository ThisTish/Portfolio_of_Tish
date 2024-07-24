import React from 'react'

const NameDetails = () => {
  return (
    <div className="container h-48 w-fit border-green border-8 space-y-3 px-3 pb-14 mt-10 -ml-5 rounded-3xl bg-highlight">
  <h1 className="text-red text-5xl font-bold flex -mt-7 p-3 ">Tish Sirface</h1>
  <div className='flex flex-col text-secondary items-end '>
    <p className=" font-semibold mt-3">
      tish.sirface@gmail.com
    </p>
    <p className=" font-light mt-1">
    801.309.7471 | Salt Lake City.UT
    </p>
    <p className=" font-sans mt-2">
      <a href='https://github.com/ThisTish'>GitHub</a> | <a href='https://www.linkedin.com/in/tishsirface'>LinkedIn</a>
    </p>
  </div>
  </div>
  )
}

export default NameDetails