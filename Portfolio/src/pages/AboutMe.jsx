import ProfilePicAnimated from "../components/ProfilePicAnimated"
import AboutCards from "../components/AboutCards"

const AboutMe = () => {
  return (
	<div className="flex flex-col">
		<ProfilePicAnimated />
		<AboutCards />
		<AboutCards />
		<AboutCards />
	</div>
  )
}

export default AboutMe