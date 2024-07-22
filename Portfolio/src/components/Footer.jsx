import { NavLink } from "react-router-dom"
import logo from '../assets/images/logo.png'
import { FaGithub, FaLinkedinIn, FaEnvelope, FaInstagram, FaTwitter } from 'react-icons/fa' 


const Footer = () => {
	return (
		<div className="bg-secondary  flex mt-auto">
			<footer className="flex justify-start">
				<NavLink to='/aboutme'>
					<img src={ logo } className='h-10 w-auto md:h-20' alt='TS-Tish Sirface Initials' />
				</NavLink>
				<div className="text-red w-64 pl-10 pr-5 font-sans bg-yellow rounded-tr-full rounded-br-full flex justify-between">
					<a href= ""className="mt-1"><FaInstagram /></a>
					<a href= ""className="mt-4"><FaTwitter  /></a>
					<a href= ""className="mt-2"><FaEnvelope /></a>
					<a href= ""className="mt-5"><FaLinkedinIn /></a>
					<a href= ""className="mt-3"><FaGithub /></a>
				</div>

			</footer>
		</div>
	)
}

export default Footer