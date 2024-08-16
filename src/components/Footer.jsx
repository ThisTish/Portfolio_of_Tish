import { NavLink } from "react-router-dom"
import logo from '../assets/images/logo.png'
import { FaGithub, FaLinkedinIn, FaEnvelope, FaInstagram, FaTwitter } from 'react-icons/fa' 


const Footer = () => {
	return (
		<div className="bg-secondary flex mt-auto">
			<footer className="flex justify-start">
				{/* img btn to go to home */}
				<NavLink to='/about'>
					<img src={ logo } className='h-16 w-auto md:h-20' alt='TS-Tish Sirface Initials' />
				</NavLink>
				{/* socials */}
				<div className="text-yellow w-64 pl-10 pr-5 text-xl rounded-tr-full rounded-br-full flex -ml-8 md:my-1 md:text-2xl items-center">
					<a href= "https://www.instagram.com/_thistish"className="-mt-1 bg-red rounded-full p-3 -ml-1 mr-1 md:mx-2 lg:mx-4"><FaInstagram /></a>
					<a href= "https://x.com/SirTishFace"className="mt-6 bg-red rounded-full p-1  ml-1 mr-2 md:mx-4 lg:mx-8"><FaTwitter  /></a>
					<NavLink to= "contact"className="mt-2 bg-red rounded-full p-4 mx-3 md:mx-6 lg:mx-8"><FaEnvelope /></NavLink>
					<a href= "https://www.linkedin.com/in/tishsirface/"className="mt-5 bg-red rounded-full p-2 -mx-1 md:mx-9 lg:mx-14"><FaLinkedinIn /></a>
					<a href= "https://github.com/ThisTish"className="-mt-3 bg-red rounded-full p-5 ml-4 md:ml-8 md:-mt-6 lg:mx-16"><FaGithub /></a>
				</div>

			</footer>
		</div>
	)
}

export default Footer