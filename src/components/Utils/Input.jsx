import React from 'react'

const Input = ({placeholder, type, name, id }) => {
	return (
		<input placeholder={placeholder} type={type} name={name} id={id} className="rounded-full bg-transparent border-highlight border-4 p-2 md:px-4 text-secondary placeholder-primary focus:color lg:w-72" />
	)
}

export default Input