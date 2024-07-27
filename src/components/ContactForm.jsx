import { useState, useRef } from "react"
import emailjs from '@emailjs/browser'

// use state for fields being left empty when cursor leaves 'onFocus'
// onFocus(setInputStatus)

const ContactForm = () => {


	

	const form = useRef()

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')
	const [nameError, setNameError] = useState('')
	const [emailError, setEmailError] = useState('')
	const [messageError, setMessageError] = useState('')

	const [color, setColor] = useState('primary')
	const [validEmail, setValidEmail] = useState(true)



	const handleInput = (event) => {

		const {name, value} = event.target
			if(!value){
				switch(name){
					case "name":
						setNameError('FieldRequired')
						setColor('border-red')
						break
					case "email":
						setEmailError('FieldRequired')
						setColor('border-red')
						break
					case "message":
						setMessageError('FieldRequired')
						setColor('border-red')
						break
						default:
							break
				}
			
			}else{
				switch(name){
					case "name":
						setNameError('')
						setColor('border-primary')
						break
					case "email":
						setEmailError('')
						setColor('border-primary')
						break
					case "message":
						setMessageError('')
						setColor('border-primary')
						break
						default:
							break
				}
				
			}
			if(name === "email" && value){
				if (!(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/).test(value)){
					setValidEmail(false)
					setEmailError('Valid Email Required')
				}else{
					setEmailError('')
				}
			
		}
	}

	const sendMessage = (event) => {

		event.preventDefault()
		// emailjs functions
		emailjs.sendForm(
			import.meta.env.VITE_SERVICE_ID, 
			import.meta.env.VITE_TEMPLATE_ID, form.current, {
			publicKey: import.meta.env.VITE_PUBLIC_KEY
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
	}

	return (
		<div className="flex flex-col my-24 ">
			<form ref={form} onSubmit={sendMessage}  className="space-y-10 flex flex-col items-end lg:text-xl">
				<div>
					<label className="text-secondary font-light" htmlFor="name">Name</label>
					<input 
					type="text" 
					id="name" 
					name="name" 
					className="max-w-48 rounded-full border-yellow border-4 p-2 text-secondary focus:color lg:max-w-52"
					required
					value={name}
					onChange={(event) => setName(event.target.value)}
					onBlur={handleInput}
					/>
					{nameError && <p className="text-red text-xs">{nameError}</p>}
				</div>

				<div>
					<label className="text-secondary font-light " htmlFor="email">Email</label>
					<input 
					type="text" 
					id="email" 
					name="email" 
					className="rounded-full bg-primary border-highlight border-4 mr-2 w-60 px-2 text-secondary focus:color lg:w-72" 
					required
					value={email}
					onChange={(event) => setEmail(event.target.value)}
					onBlur={handleInput}

					/>
					{emailError && <p className="text-red text-xs">{emailError}</p>}

				</div>

				<div>
					<label className="text-secondary font-light" htmlFor="message" >Message</label>
					<textarea 
					name="message" 
					id="message" 
					className="rounded-3xl h-32 w-72 border-8 border-green p-3 text-secondary focus:color lg:min-w-96 lg:h-52"
					required
					value={message}
					onChange={(event) => setMessage(event.target.value)}
					onBlur={handleInput}

					></textarea>
					{messageError && <p className="text-red text-xs">{messageError}</p>}

				</div>

				<div className="h-20 flex relative">
					{/* bubbles */}
					<div className="bg-yellow w-5 h-5 rounded-full absolute bottom-3"></div>
					<div className="bg-shadow w-7 h-7 rounded-full absolute right-0"></div>
					<div className="bg-highlight w-10 h-10 rounded-full absolute top-8 -left-48"></div>
					<div className="border border-shadow border-3 w-5 h-5 rounded-full absolute top-4 right-40"></div>
					<div className="bg-green w-3 h-3 rounded-full absolute bottom-5 right-32"></div>
					<div className="bg-secondary w-5 h-5 rounded-full absolute top-2 right-20 "></div>


					<button type="submit" className="bg-red rounded-full px-5 text-highlight font-bold [text-shadow:_-2px_4px_0_var(--shadow)] " > Send </button>
				</div>
			</form>
		</div>
	)
}
export default ContactForm