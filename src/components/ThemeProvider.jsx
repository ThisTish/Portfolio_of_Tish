import { createContext, useContext, useState } from "react"
import TishSirfaceName from '../assets/images/TishSirfaceName.png'
import SummerName from '../assets/images/SummerName.png'

const ThemeContext = createContext(null)

const themes = {
	base: {
		class: "base",
		images: {
			name: TishSirfaceName,
			logo: "../assets/images/logo.png"
		}
	},
	summer: {
		class: "summer",
		images: {
			name: SummerName
		}
	}

}

export const ThemeProvider = ({children}) => {
	const [theme, setTheme] = useState(themes.base)

	const changeTheme = (themeName) =>{
		setTheme(themes[themeName])
	}

	return (
		<ThemeContext.Provider value={{theme, setTheme}}>
			{children}
		</ThemeContext.Provider>
	)
}

export const useTheme = () => useContext(ThemeContext)