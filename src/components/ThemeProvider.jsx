import { createContext, useContext, useState } from "react"
import TishSirfaceName from '../assets/images/TishSirfaceName.png'
import logo from '../assets/images/logo.png'
import profilePic from '../assets/images/profilePic.mp4'

import SummerName from '../assets/images/SummerName.png'
import SummerLogo from '../assets/images/SummerLogo.png'
import SummerPic from '../assets/images/summerPic.mp4'

import AutumnName from '../assets/images/AutumnName.png'
import AutumnLogo from '../assets/images/AutumnLogo.png'
import AutumnPic from '../assets/images/AutumnProfilePic.mp4'

import GrayName from '../assets/images/GrayName.png'
import GrayLogo from '../assets/images/GrayLogo.png'
import GrayPic from '../assets/images/GrayProfilePic.mp4'

const ThemeContext = createContext(null)

const themes = {
	base: {
		class: "base",
		images: {
			name: TishSirfaceName,
			logo: logo
		},
		video: {
			pic: profilePic
		}
	},
	summer: {
		class: "summer",
		images: {
			name: SummerName,
			logo: SummerLogo
		},
		video: {
			pic: SummerPic
		}
	},
	autumn: {
		class: "autumn",
		images: {
			name: AutumnName,
			logo: AutumnLogo
		},
		video: {
			pic: AutumnPic
		}
	},
	grayscale: {
		class: "grayscale",
		images: {
			name: GrayName,
			logo: GrayLogo
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