import React from 'react'
import Headings from '../Utils/Headings'
import { CgProfile } from 'react-icons/cg'

function AboutMe() {
  return (
	<>
	<div className='flex flex-col-reverse md:flex-row items-center gap-10 py-20 md:py-60 md:px-16 md:justify-around'>
		<CgProfile size={150} className='w-1/2'/>
		{/* <img src="https://via.placeholder.com/150" alt="profile" /> */}
		<div className='flex flex-col w-1/2'>
		<div className='flex flex-col text-3xl'>
			<header className='text-start'>Developer</header>
			<header className='text-center'>Creator</header>
			<header className='text-end mr-10'>Discer</header>
		</div>
		<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, dolor omnis. Tempore omnis amet nulla illum vel impedit modi. Earum vero optio sunt ea provident excepturi molestiae quibusdam quod incidunt!</p>
		</div>
	</div>
	</>
  )
}

export default AboutMe