import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import Hero from "../components/Hero"
import Footer from "../components/Footer"



const MainLayout = () => {
	return (
		<>
			<NavBar />
			<Hero />
			<Outlet />
			<Footer />
		</>

	)
}

export default MainLayout