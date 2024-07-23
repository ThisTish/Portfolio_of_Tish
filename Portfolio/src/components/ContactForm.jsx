import { useState, useRef } from "react"
import emailjs from '@emailjs/browser'

// use state for fields being left empty when cursor leaves 'onFocus'
// onFocus(setInputStatus)


const ContactForm = () => {

	const form = useRef()

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')

	const sendMessage = (event) => {
		event.preventDefault()

		console.log(name, email, message)
		
		emailjs.sendForm('service_1r1l9yt', '1234555', form.current, {
			publicKey: '6LX2y83yrD4iURq21'
		}).then(() =>{
			console.log(`success!`)
		},
		(error) =>{
			console.log('Failed', error.text)
		}
		)

		const newMessage = {
			name,
			email,
			message
		}
		console.log(newMessage)
	}

	return (
		<div className="flex flex-col my-10">
			{/* react19? actions? */}
			<form ref={form} onSubmit={sendMessage}  className="space-y-10 flex flex-col items-end">
				<div>
					<label className="text-secondary font-light" htmlFor="name">Name</label>
					<input 
					type="text" 
					id="name" 
					name="name" 
					className=" max-w-48 text-shadow rounded-full border-yellow border-4 p-2"
					required
					value={name}
					onChange={(event) => setName(event.target.value)}
					/>
				</div>

				<div>
					<label className="text-secondary font-light " htmlFor="email">Email</label>
					<input 
					type="text" 
					id="email" 
					name="email" 
					className="text-shadow rounded-full bg-primary border-highlight border-4 mr-2 w-60 px-2" 
					required
					value={email}
					onChange={(event) => setEmail(event.target.value)}
					/>
				</div>

				<div>
					<label className="text-secondary font-light" htmlFor="message" >Message</label>
					<textarea 
					name="message" 
					id="message" 
					className="text-shadow rounded-3xl h-32 w-72 border-8 border-green p-3"
					required
					value={message}
					onChange={(event) => setMessage(event.target.value)}
					></textarea>
				</div>

				<div className="h-20 flex justify-between relative">
					{/* bubbles */}
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