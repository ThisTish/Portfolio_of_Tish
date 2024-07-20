
const Footer = () => {
	return (
		<div>
			<footer className="bg-secondary max-w-screen">
			<ul className="text-red font-semibold bg-yellow max-w-screen-md mx-auto justify-center space-x-20 rounded-full hidden md:flex">
			{/* get icons for small screen */}
					<a href="http://github.com/ThisTish"> Email </a> 
					{/* embed email feature */}
					<a href="http://github.com/ThisTish"> LinkedIn </a> 
					<a href="http://github.com/ThisTish"> Instagram </a> 
					<a href="http://github.com/ThisTish"> Twitter </a> 
					<a href="http://github.com/ThisTish"> GitHub </a> 
				</ul>
			</footer>
		</div>
	)
}

export default Footer