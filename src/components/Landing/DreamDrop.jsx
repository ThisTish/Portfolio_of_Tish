import { useDropzone } from "react-dropzone"
import { useCallback, useState } from "react"
import Button from "../Utils/Button"

const DreamDrop = () => {
	const [preview, setPreview] = useState(null)
	const [file, setFile] = useState([])
	const [picStatus, setPicStatus] = useState('ready')
	const [title, setTitle] = useState('')


	const onDrop = useCallback(async (acceptedFiles) => {
		const file = new FileReader()
		file.onload = () => {
			setPreview(file.result)
		}
		setPicStatus('preview')
		file.readAsDataURL(acceptedFiles[0])
		setFile(acceptedFiles)
	}, [])

	const handleTitle = (event) => {
		event.preventDefault()

		const title = event.target.value
		setTitle(title)
	}

	const handleSubmit = (event) => {
		event.preventDefault()

		if (!file[0]) return

		const newDream = file[0]

		console.log(newDream)
		console.log(title)


		const formData = new FormData()

		formData.append('file', newDream)
		formData.append('upload_preset', 'dreams')
		formData.append('name', title)

		formData.forEach((value, key) => [
			console.log(value, key)
		])

	}


	const { acceptedFiles, getRootProps, getInputProps } = useDropzone({ onDrop })

	return (
		<div className="flex justify-center md:justify-end md:mx-28 items-center md:text-4xl text-secondary pb-96">
			<form className="dropzone flex flex-col items-center md:my-40 md:items-end space-y-10" id="dream-dropzone">
				{/* start off */}
				{picStatus === 'ready' && (
					<div {...getRootProps()} className="w-48 md:w-96 h-48 md:h-96 bg-secondary border-8 border-highlight rounded-3xl flex items-end">
						<input {...getInputProps()} placeholder="Place Your dream" />
						<span className="text-primary tracking-widest leading-loose text-end px-5" >Place Your Dream Here</span>
					</div>
				)}
			</form>
			{/* preview before save */}
			{picStatus === 'preview' && (
				// <div className="w-48 md:w-96 h-48 md:h-96 bg-secondary border-8 border-highlight rounded-3xl flex items-end">
				<form onSubmit={handleSubmit} method="post" className="dropzone flex flex-col items-center md:my-40 md:items-end space-y-10" id="dream-dropzone">
					<img src={preview} className="w-48 md:w-96 h-48 md:h-96 border-8 border-highlight rounded-3xl flex items-end" />


					<input onChange={handleTitle} type='text' name="title" id="title" placeholder='Title Your Dream' className="placeholder-primary rounded-3xl px-3" />
					{/* <button type="submit" className="text-primary font-semibold p-5 tracking-tighter text-xs bg-secondary rounded-full border-2 border-highlight hover:bg-green hover:border-0 md:text-base lg:text-lg">Add Your Dream</button> */}
					<Button type="submit" text="Save Your Dream"/>

					{/* </div> */}
				</form>
			)}
		</div>
	)
}

export default DreamDrop