import ProfilePicAnimated from "../components/ProfilePicAnimated"
import AboutCards from "../components/AboutCards"

const AboutMe = () => {
	return (
		<div className="flex flex-col mb-5">
			<h2 className="text-highlight text-3xl font-bold [text-shadow:_-2px_4px_0_var(--shadow)] mx-3">AboutMe</h2>
			<ProfilePicAnimated />
			<AboutCards />
			<AboutCards />
			<AboutCards />
		</div>
	)
}

export default AboutMe