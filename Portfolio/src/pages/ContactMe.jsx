import ContactForm from "../components/ContactForm"

const ContactMe = () => {
	return (
		<div className="m-3">
			<ContactForm />
			<div className="bg-yellow max-h-24 flex flex-col items-end justify-end max-w-screen-lg text-secondary">
				<p className="font-semibold mr-60">MESSAGE ME</p>
				<p className="mr-3">for projects, design, and development</p>
				<h3 className="font-extrabold">-TISH</h3>
			</div>
		</div>
	)
}

export default ContactMe