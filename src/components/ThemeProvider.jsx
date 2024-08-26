import { createContext, useContext, useState } from "react"
import TishSirfaceName from '../assets/images/TishSirfaceName.png'
import logo from '../assets/images/logo.png'
import profilePic from '../assets/images/profilePic.mp4'
import Hero from '../assets/images/Hero.png'

import SummerName from '../assets/images/SummerName.png'
import SummerLogo from '../assets/images/SummerLogo.png'
import SummerPic from '../assets/images/summerPic.mp4'
import SummerHero from '../assets/images/SummerHero.png'

import AutumnName from '../assets/images/AutumnName.png'
import AutumnLogo from '../assets/images/AutumnLogo.png'
import AutumnPic from '../assets/images/AutumnProfilePic.mp4'
import AutumnHero from '../assets/images/AutumnHero.png'

import GrayName from '../assets/images/GrayName.png'
import GrayLogo from '../assets/images/GrayLogo.png'
import GrayPic from '../assets/images/GrayProfilePic.mp4'
import GrayHero from '../assets/images/GrayHero.png'

const ThemeContext = createContext(null)

const themes = {
	base: {
		class: "base",
		images: {
			name: TishSirfaceName,
			logo: logo,
			hero: Hero
		},
		video: {
			pic: profilePic
		}
	},
	summer: {
		class: "summer",
		images: {
			name: SummerName,
			logo: SummerLogo,
			hero: SummerHero
		},
		video: {
			pic: SummerPic
		}
	},
	autumn: {
		class: "autumn",
		images: {
			name: AutumnName,
			logo: AutumnLogo,
			hero: AutumnHero
		},
		video: {
			pic: AutumnPic
		}
	},
	grayscale: {
		class: "grayscale",
		images: {
			name: GrayName,
			logo: GrayLogo,
			hero: GrayHero
		},
		video: {
			pic: GrayPic
		}
	},

}

export const ThemeProvider = ({children}) => {
	const [theme, setTheme] = useState(() =>{
		const savedtheme = localStorage.getItem("theme")
		return savedtheme ? themes[savedtheme] : themes.base
	})

	const changeTheme = (themeName) =>{
		setTheme(themes[themeName])
		localStorage.setItem("theme", themeName)
		window.location.reload()

	}

	return (
		<ThemeContext.Provider value={{theme, setTheme: changeTheme}}>
			{children}
		</ThemeContext.Provider>
	)
}

export const useTheme = () => useContext(ThemeContext)