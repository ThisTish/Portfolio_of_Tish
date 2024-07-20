
import logo from '../assets/images/logo.png'
import { NavLink } from 'react-router-dom'



const NavBar = () => {
  // const  = ({isActive}) => isActive //?is not done, need it to show what is active.(want to do slider, gotta think about how)

  return (
	<div className='bg-green w-screen'>
  
    <nav>
      <ul className="text-red font-semibold bg-yellow max-w-screen-md mx-auto justify-center space-x-20 rounded-full hidden md:flex">
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