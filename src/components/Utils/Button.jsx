import React from 'react'

const Button = ( { text, onClick }) => {
	return (
		<button 
		onClick={onClick}
		className='text-highlight w-fit tracking-tighter p-3 text-xs bg-secondary rounded-full border-4 border-highlight hover:bg-highlight hover:text-secondary hover:font-semibold md:text-lg md:border-4'>
			{text}
		</button>
	)
}

export default Button