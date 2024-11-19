import React from 'react'
import { CgWebsite } from 'react-icons/cg'

function ServiceCard({icon, title, description, border}) {
  return (
	<div className={`flex flex-col items-center m-10 border-8 border-${border} gap-8 rounded-3xl p-10 sm:p-8 md:p-3 lg:p-10`}>
		<div>
			{icon}
		</div>
		<h2 className='text-xl'>{title}</h2>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium neque reiciendis dolores expedita tempore! Unde, aperiam eos? Autem, illo dolorem?</p>
	</div>
  )
}

export default ServiceCard