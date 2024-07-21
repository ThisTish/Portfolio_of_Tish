
import logo from '../assets/images/logo.png'
import { NavLink } from 'react-router-dom'



const NavBar = () => {
  // const  = ({isActive}) => isActive //?is not done, need it to show what is active.(want to do slider, gotta think about how) Circles around active?

  return (
	<div>
  
    <nav className="text-xs text-red rounded-tl-full rounded-bl-full font-semibold bg-yellow max-w-screen-md absolute -bottom-10 right-0 flex md:text-lg lg:bottom-0 lg:text-xl">
      <ul className='  py-1 px-10 flex flex-col space-y-3 -mr-3 lg:space-y-0 lg:flex-row lg:space-x-20' >
        {/* <icon for hamburger menu */}
        <NavLink to='/aboutMe' >AboutMe</NavLink> 
        <NavLink to='/portfolio' >Portfolio</NavLink> 
        <NavLink to='/contactMe' >ContactMe</NavLink> 
        <NavLink to='/resume' >Resume</NavLink> 
        
      </ul>
    </nav>

  </div>
  )
}

export default NavBar