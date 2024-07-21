import ContactForm from "../components/ContactForm"

const ContactMe = () => {
	return (
		<div className="mx-3">
			<ContactForm />
			<div className="bg-yellow h-24 flex flex-col items-end max-w-screen-lg absolute text-secondary mr-3">
				<p className="text-lg -mt-3 font-semibold mr-60">MESSAGE ME</p>
				<p className="mr-5 -mt-2">for projects, design, and development</p>
				<h3 className="font-extrabold -mr-1 -mb-4">-TISH</h3>
			</div>
		</div>
	)
}

export default ContactMe