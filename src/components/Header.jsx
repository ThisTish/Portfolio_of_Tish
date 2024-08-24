import NameLogo from "./NameLogo"
import NavBar from "./NavBar"

const Header = () => {
	return (
		<div className="flex bg-secondary relative">
			<NameLogo />
			<NavBar />
		</div>
	)
}

export default Header