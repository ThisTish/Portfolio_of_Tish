import { useTheme } from '../components/ThemeProvider'
import ProfilePicAnimated from '../components/ProfilePicAnimated'
import MyDreams from '../components/Hero/MyDreams'
import YourDream from '../components/Hero/YourDream'


const Landing = () => {
	const theme = useTheme()

	return (
		<>
			<main>


				<div className='text-highlight flex items-center ml-96'>
					<div className="flex flex-col text-center">
						<h2 className='text-4xl'> Hi, I'm Tish</h2>
						<p> I'm a Dreamer, Designer, and Disc Golfer</p>
					</div>
					<ProfilePicAnimated />
				</div>

				<div>
					<MyDreams />
				</div>

				<div>
					<YourDream />
				</div>


			</main>
		</>
	)
}

export default Landing