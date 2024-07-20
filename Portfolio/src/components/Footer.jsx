import { NavLink } from "react-router-dom"
import logo from '../assets/images/logo.png'


const Footer = () => {
	return (
		<div className="bg-secondary w-screen flex ">
			<footer className="flex items-center">
		<NavLink to='/'>
			<img src={ logo } className='h-10 w-auto mx-auto md:h-20' alt='TS-Tish Sirface Initials' />
		</NavLink>
		<ul className="text-red font-semibold bg-yellow max-w-screen-md mx-auto px-10 space-x-20 rounded-tr-full rounded-br-full hidden md:flex">
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