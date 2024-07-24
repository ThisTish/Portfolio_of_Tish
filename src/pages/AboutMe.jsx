import ProfilePicAnimated from "../components/ProfilePicAnimated"
import AboutCards from "../components/AboutCards"
// ! redesign like resume. when redesigning for md:
const AboutMe = () => {

	const aboutMeFirst = {
		title: 'About Me',
		content: 'this a going to be a paragraph about me. this a going to be a paragraph about me. this a going to be a paragraph about me. this a going to be a paragraph about me. this a going to be a paragraph about me. this a going to be a paragraph about me.'
	}
	
	return (
		<div className="flex flex-col mb-5">
			<h2 className="text-highlight text-3xl font-bold [text-shadow:_-2px_4px_0_var(--shadow)] mx-3">AboutMe</h2>
			<ProfilePicAnimated />
			<AboutCards title={aboutMeFirst.title} content={aboutMeFirst.content} />
			{/* <AboutCards /> */}
			{/* <AboutCards /> */}
		</div>
	)
}

export default AboutMe