
const Input = ({placeholder, type, name, id, onChange }) => {
	return (
		<input 
		placeholder={placeholder} 
		type={type} 
		name={name} 
		id={id} 
		onChange={onChange}
		className="rounded-full bg-transparent border-highlight border-4 p-2 md:px-4 text-secondary placeholder:text-secondary focus:color lg:w-72" />
	)
}

export default Input