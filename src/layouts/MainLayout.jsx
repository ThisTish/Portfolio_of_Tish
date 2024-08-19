import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { useState } from 'react'
import { FaHouseUser, FaCanadianMapleLeaf, FaUmbrellaBeach, FaMoon, FaWineBottle } from 'react-icons/fa'

const themes = [
	{
	class: "base",
	icon: <FaHouseUser />
	},
	{
	class: "autumn",
	icon: <FaCanadianMapleLeaf />
	},
	{
	class: "summer",
	icon: <FaUmbrellaBeach />
	},
	{
	class: "dark-grayscale",
	icon: <FaMoon />
	}
]

const MainLayout = () => {
	const [theme, setTheme] = useState(themes[0])
	return (
		<>
			<main className={`bg-primary theme-${theme}`}>
				<Header />
				<div className="flex text-highlight text-xs md:text-base lg:text-2xl absolute top-0 right-0">
					<h3 className="font-semibold tracking-widest hidden ">Select Theme ...</h3>
					<div className="flex flex-col md:flex-row gap-2 py-3 px-5 lg:gap-6 ">
						{themes.map((t, index) => (
							<div key={index} className="cursor-pointer" onClick={() => setTheme(t.class)} >{t.icon}</div>
						))}
					</div>
				</div>
				<Outlet />
				<Footer />
			</main>
		</>

	)
}

export default MainLayout