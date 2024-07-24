import Hero from "./Hero"
import NavBar from "./NavBar"

const Header = () => {
  return (
	<div className="flex bg-green relative">
		<Hero />
		<NavBar />
	</div>
  )
}

export default Header