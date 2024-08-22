import { useTheme } from '../components/ThemeProvider'


const Landing = () => {
	const theme = useTheme()

	return (
		<>
		<main className='grid-cols-2'>


		<div>
			<video src={theme.video.pic} autoPlay muted />
		</div>


		</main>
		</>
	)
}

export default Landing