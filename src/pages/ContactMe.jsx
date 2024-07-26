import ContactForm from "../components/ContactForm"

const ContactMe = () => {
	
// use state for message status


	return (
		<div className="flex flex-col mx-auto">
			<div className="flex flex-col md:flex-row lg:space-x-20">
				<div className="hidden md:flex">
					<div className=" flex-col p-10  md:flex">
						<h2 className="text-highlight text-3xl font-bold [text-shadow:_-2px_4px_0_var(--shadow)] md:block mx-3 my-10 lg:m-16 lg:text-end md:text-5xl lg:text-7xl">Contact Me</h2>
						<ul className="text-secondary space-y-2">
							<li className="font-semibold">
								Tish.Sirface@gmail.com
							</li>
							<li className="font-thin tracking-widest ">
								801.309.7471
							</li>
							<li className="italic">
								Salt Lake City, UT
							</li>
						</ul>
					</div>
				</div> 

				<div>
					<ContactForm />
				</div>
			</div>

			<div className="bg-yellow h-12 flex flex-col items-end max-w-sm text-secondary mr-3 mb-10">
				<p className="text-lg -mt-3 font-semibold mr-60">MESSAGE ME</p>
				<p className="mr-5 -mt-2">for projects, design, and development</p>
				<h3 className="font-extrabold -mr-1 -mb-4">-TISH</h3>
			</div>
		</div>
	)

}
export default ContactMe