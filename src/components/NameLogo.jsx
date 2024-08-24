import { useTheme } from './ThemeProvider'
import {Link} from 'react-router-dom'


const NameLogo = () => {
	const { theme } = useTheme()

	return (
	<div className='mx-auto w-screen'>
		<Link to='/'>
		<img src={ theme.images.name }  className='h-40' alt='Tish Sirface with squiggles'/>
		</Link>
	</div>
	)
}

export default NameLogo