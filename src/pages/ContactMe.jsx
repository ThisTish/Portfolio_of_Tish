import ContactForm from "../components/ContactForm"

const ContactMe = () => {


	return (
		<div className="flex flex-col mx-auto">
			<div className="flex flex-col md:flex-row justify-around mr-5 lg:mr-24">
				<div className="hidden lg:my-10 md:flex">
					<div className=" flex-col justify-center bg-green h-fit p-16  lg:py-24 lg:px-20 xl:py-36 xl:px-32 space-y-16 rounded-full md:flex">
						<h2 className="text-highlight text-3xl font-bold text-nowrap [text-shadow:_-2px_4px_0_var(--shadow)] md:block lg:text-end md:text-3xl lg:text-5xl">Contact Me</h2>
						<ul className="text-secondary space-y-2">
							<li className="font-semibold lg:text-xl">
								Tish.Sirface@gmail.com
							</li>
							<li className="font-thin tracking-widest lg:text-lg ">
								801.309.7471
							</li>
							<li className="italic text-sm lg:text-base">
								Salt Lake City, UT
							</li>
						</ul>
					</div>
				</div> 

				<div>
					<ContactForm />
				</div>
			</div>

			<div className="bg-yellow h-12 flex flex-col items-end max-w-sm text-secondary mr-3 mb-10 lg:h-24">
				<p className="text-lg -mt-3 font-semibold mr-60 lg:text-2xl lg:-mt-5 lg:pb-7 lg:text-nowrap">MESSAGE ME</p>
				<p className="mr-5 -mt-2 lg:text-lg">for projects, design, and development</p>
				<h3 className="font-extrabold -mr-1 -mb-4 lg:text-2xl">-TISH</h3>
			</div>
		</div>
	)

}
export default ContactMe