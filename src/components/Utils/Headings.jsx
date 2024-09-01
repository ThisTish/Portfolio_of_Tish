

const Headings = ({text}) => {
	return (
		<div className='ml-10 relative h-20 w-48 md:w-72 lg:h-24 lg:w-96 text-nowrap'>
			<div className="bg-yellow w-5 h-5 rounded-full absolute bottom-3"></div>
			<div className="bg-red w-3 h-3 rounded-full absolute left-14 "></div>
			<div className="bg-shadow w-7 h-7 rounded-full absolute -left-10 top-3 z-20 "></div>
			<div className="bg-highlight w-10 h-10 rounded-full absolute top-8 -left-48"></div>
			<div className="border border-shadow border-3 w-5 h-5 rounded-full absolute right-10 lg:right-40 "></div>
			<div className="bg-green w-3 h-3 rounded-full absolute bottom-5 right-32"></div>
			<div className="bg-secondary w-5 h-5 rounded-full absolute top-2 right-10 -z-10 "></div>
			<h2 className="text-highlight text-3xl font-bold [text-shadow:_-2px_4px_0_var(--shadow)] mx-3 my-1 md:text-5xl lg:m-16 lg:text-7xl">{text}</h2>
		</div>
	)
}

export default Headings