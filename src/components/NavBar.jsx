
import { NavLink } from 'react-router-dom'



const NavBar = () => {
  const linkClass = ({isActive}) => isActive ? "font-sans tracking-wider rounded-full flex items-center justify-center px-1 bg-secondary text-yellow " : "font-sans tracking-wider  rounded-full lg:py-7  px-1 hover:bg-red hover:text-yellow"

  return (
	<div>
  
    <nav className="text-xs text-secondary rounded-tl-full rounded-bl-full py-2 lg:py-0 bg-yellow  max-w-screen-md absolute -bottom-14 right-0 flex z-20 md:text-base lg:bottom-0 lg:text-lg">
      <ul className=' py-1 px-10 flex flex-col space-y-3 -mr-3 lg:space-y-0  lg:flex-row lg:space-x-20' >
        <NavLink className={linkClass} to='/about' >AboutMe</NavLink> 
        <NavLink className={linkClass} to='/portfolio' >Portfolio</NavLink> 
        <NavLink className={linkClass} to='/contact' >&nbsp;Contact&nbsp;</NavLink> 
        <NavLink className={linkClass} to='/resume' >&nbsp;Resume&nbsp; </NavLink> 
        
      </ul>
    </nav>

  </div>
  )
}

export default NavBar