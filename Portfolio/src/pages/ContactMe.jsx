import ContactForm from "../components/ContactForm"

const ContactMe = () => {
	return (
		<div >
			<h2 className="text-highlight text-3xl font-bold [text-shadow:_-2px_4px_0_var(--shadow)] mx-3 my-1">ContactMe</h2>
			
			<ContactForm />
			<div className="bg-yellow h-12 flex flex-col items-end max-w-sm text-secondary mr-3">
				<p className="text-lg -mt-3 font-semibold mr-60">MESSAGE ME</p>
				<p className="mr-5 -mt-2">for projects, design, and development</p>
				<h3 className="font-extrabold -mr-1 -mb-4">-TISH</h3>
			</div>
		</div>
	)
}

export default ContactMe