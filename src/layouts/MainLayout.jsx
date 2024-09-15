import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { FaHouseUser, FaCanadianMapleLeaf, FaUmbrellaBeach, FaMoon } from 'react-icons/fa'
import { useTheme } from '../components/ThemeProvider'
import { FaArrowCircleUp } from 'react-icons/fa'


const MainLayout = () => {
	const { theme, setTheme } = useTheme()
	return (
		<>
			<main className={`bg-primary theme-${theme.class}`}>
				<Header theme={theme} />
				<div className="flex text-highlight text-xs md:text-base py-3 lg:text-2xl absolute top-0 right-0">
					<p className="font-extralight  lg:text-lg tracking-widest hidden md:block ">Select Theme...</p>
					<div className="flex flex-col md:flex-row gap-2 px-5 lg:gap-6 ">
						<FaHouseUser onClick={() => setTheme("base")} />
						<FaCanadianMapleLeaf onClick={() => setTheme("autumn")} />
						<FaUmbrellaBeach onClick={() => setTheme("summer")} />
						<FaMoon onClick={() => setTheme("grayscale")} />
					</div>
				<a href='#top' aria-label="Scroll to top" className='text-secondary text-3xl md:text-4xl lg:text-5xl rounded-full bg-highlight bg-opacity-55 opacity-55 fixed bottom-20 right-5 md:bottom-24 md:right-10 lg:bottom-28 lg:right-12 '><FaArrowCircleUp /></a>
				</div>
				<Outlet />
				<Footer />
			</main>
		</>

	)
}

export default MainLayout