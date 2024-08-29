import React from 'react'

const ButtonSecondary = ({ text, onClick }) => {
	return (
		<button
			onClick={onClick}
			className='text-secondary tracking-tighter p-3 text-xs bg-highlight rounded-full border-2 border-secondary hover:bg-green hover:border-0 hover:text-highlight md:text-lg'>
			{text}
		</button>
	)
}

export default ButtonSecondary