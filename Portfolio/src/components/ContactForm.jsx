
const ContactForm = () => {
	return (
		<div className="flex flex-col my-10">
			<form action="" className="space-y-10 flex flex-col items-end">
				<div>
					<label className="text-secondary font-light m-3" htmlFor="">Name</label>
					<input type="text"  className=" max-w-48 text-shadow rounded-full border-yellow border-4"/>
				</div>

				<div>
					<label className="text-secondary font-light m-3" htmlFor="">Email</label>
					<input type="text" className="text-shadow rounded-full bg-primary border-highlight border-4 mr-2" />
				</div>

				<div>
					<label className="text-secondary font-light m-3">Message</label>
					<textarea name="message" id="" className="text-shadow rounded-3xl h-32 w-72 border-8 border-green"></textarea>
				</div>

				<div className="h-20 flex justify-between relative">
					<div className="bg-yellow w-5 h-5 rounded-full absolute bottom-3"></div>
					<div className="bg-shadow w-7 h-7 rounded-full absolute right-0"></div>
					<div className="bg-highlight w-10 h-10 rounded-full absolute top-8 -left-48"></div>
					<div className="border border-shadow border-3 w-5 h-5 rounded-full absolute top-4 right-40"></div>
					<div className="bg-green w-3 h-3 rounded-full absolute bottom-5 right-32"></div>
					<div className="bg-secondary w-5 h-5 rounded-full absolute top-2 right-20 "></div>
					<button type="submit" className="bg-red rounded-full px-5" > Send! </button>
				</div>
			</form>
		</div>
	)
}
export default ContactForm