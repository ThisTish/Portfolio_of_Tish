import React from 'react'

const Button = ( { text }) => {
	return (
		<button className='text-highlight tracking-tighter p-3 text-xs bg-secondary rounded-full border-2 border-highlight hover:bg-green hover:border-0 hover:text-highlight md:text-lg md:border-4'>
			{text}
		</button>
	)
}

export default Button