import { NavLink } from "react-router-dom"
import { FaGithub, FaLinkedinIn, FaEnvelope, FaInstagram, FaTwitter } from 'react-icons/fa' 
import { useTheme } from "./ThemeProvider"


const Footer = () => {

	const { theme}  = useTheme()

	return (
		<div className="bg-secondary sticky bottom-0 mt-auto z-20">
			<footer className="flex justify-start">
				{/* img btn to go to home */}
				<NavLink to='/about'>
					<img src={ theme.images.logo } className='h-16 w-auto md:h-20' alt='TS-Tish Sirface Initials' />
				</NavLink>
				{/* socials */}
				<div className="text-yellow w-64 pl-10 pr-5 text-xl rounded-tr-full rounded-br-full flex -ml-8 md:my-1 md:text-2xl items-center relative">
					{/* bubbles */}
					<div className="bg-yellow w-5 h-5 rounded-full absolute bottom-1 left-5 md:bottom-3 md:left-12 z-0"></div>
					<div className=" bg-shadow w-4 h-4 md:w-7 md:h-7 rounded-full absolute right-0 md:-z-10 md:-right-3"></div>
					<div className="hidden sm:block bg-yellow w-7 h-7 rounded-full absolute top-5 sm:-right-32 md:-right-48 lg:-right-80"></div>
					<div className="hidden md:block bg-highlight w-10 h-10 rounded-full absolute top-8 -right-28 md:-z-10 md:-right-32"></div>
					<div className=" border border-shadow border-3 w-5 h-5 rounded-full absolute top-10 left-80 md:left-4 md:-top-3"></div>
					<div className=" bg-green w-3 h-3 rounded-full absolute bottom-5 right-32"></div>
					<div className="hidden md:block bg-green w-3 h-3 rounded-full absolute top-5 -right-56"></div>
					<div className="hidden md:block bg-secondary border-white border-3 border w-5 h-5 rounded-full absolute top-12 -right-64 "></div>
					{/* links */}
					<a 
					href= "https://www.instagram.com/_thistish"
					className="-mt-1 bg-red rounded-full p-3 -ml-1 mr-1 z-10 md:mx-2 lg:mx-4"
					target="_blank" rel="noopener noreferrer"
					aria-label="Instagram">
						<FaInstagram />
					</a>
					{/* <a 
					href="https://x.com/SirTishFace"
					className="mt-6 bg-red rounded-full p-1  ml-1 mr-2 md:mx-4 lg:mx-8"
					target="_blank" rel="noopener noreferrer"
					aria-label="X">
					<FaTwitter  />
					</a> */}
					<NavLink 
					to="contact"
					className="mt-2 bg-red rounded-full p-4 mx-3 md:mx-6 lg:mx-8"
					aria-label="Contact">
						<FaEnvelope />
					</NavLink>
					<a 
					href="https://www.linkedin.com/in/tishsirface/"
					className="mt-5 bg-red rounded-full p-4 -mx-1 md:mx-9 lg:mx-14"
					target="_blank" rel="noopener noreferrer"
					aria-label="LinkedIn">
						<FaLinkedinIn />
					</a>
					<a 
					href= "https://github.com/ThisTish"
					className="-mt-3 bg-red rounded-full p-5 ml-4 z-10  md:ml-8 md:-mt-6 lg:mx-16"
					target="_blank" rel="noopener noreferrer"
					aria-label="GitHub">
						<FaGithub />
					</a>
				</div>

			</footer>
		</div>
	)
}

export default Footer