
import { NavLink } from 'react-router-dom'



const NavBar = () => {
  const linkClass = ({isActive}) => isActive ? "font-sans tracking-wider rounded-full lg:py-9 px-1 bg-red text-yellow" : "font-sans tracking-wider bg-transparent rounded-full  lg:py-8 px-1 hover:bg-red hover:text-yellow"

  return (
	<div>
  
    <nav className="text-xs text-red rounded-tl-full rounded-bl-full py-2 font-semibold bg-yellow max-w-screen-md absolute -bottom-14 right-0 flex z-20 md:text-lg lg:bottom-0 lg:text-xl">
      <ul className='  py-1 px-10 flex flex-col space-y-3 -mr-3 lg:space-y-0 lg:flex-row lg:space-x-20' >
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