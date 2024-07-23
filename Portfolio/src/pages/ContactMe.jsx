import ContactForm from "../components/ContactForm"

const ContactMe = () => {
	
// use state for message status

	// emailjs.init('6LX2y83yrD4iURq21', {
	// })
	
	// const submitMessage = async ({newMessage}) => {
	// 	const {name, email, message} = newMessage
	// 	console.log(name, email, message)
		
	// 	const emailContent = {
	// 		from_name: name,
	// 		from_email: email,
	// 		message
	// 	}
	
	// // const sendingEmail = async (email) =>{
	// 	try{
	// 		const res = await emailjs.send('6LX2y83yrD4iURq21', '1234555', emailContent)
	// 		if(res.status === 200 || res.text === 'OK'){
	// 				console.log(`Success! I look forward to hearing from you!`)
	// 			}else{
	// 				console.log(`There seems to be an error`)
	// 			}
	// 		}catch(error){
	// 			console.log(`Something wrong happened`, error)
	// 		}
	// 	// }
	// }

	return (
		<div >
			<h2 className="text-highlight text-3xl font-bold [text-shadow:_-2px_4px_0_var(--shadow)] mx-3 my-1">ContactMe</h2>
			
			<ContactForm />
			<div className="bg-yellow h-12 flex flex-col items-end max-w-sm text-secondary mr-3">
				<p className="text-lg -mt-3 font-semibold mr-60">MESSAGE ME</p>
				<p className="mr-5 -mt-2">for projects, design, and development</p>
				<h3 className="font-extrabold -mr-1 -mb-4">-TISH</h3>
			</div>
			{/* {messageStatus && <p>{messageStatus}</p>} */}
		</div>
	)

}
export default ContactMe