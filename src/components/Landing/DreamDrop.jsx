import { useDropzone } from "react-dropzone"
import { useCallback, useState } from "react"
import Button from "../Utils/Button"
import ButtonSecondary from "../Utils/ButtonSecondary"
import Input from '../Utils/Input'

const DreamDrop = () => {
	const [preview, setPreview] = useState(null)
	const [file, setFile] = useState([])
	const [picStatus, setPicStatus] = useState('ready')
	const [title, setTitle] = useState('')
	const [imgSrc, setImgSrc] = useState(null)
	const [uploadData, setUploadData] = useState(null)

	const handleClear = (event) =>{
		event.preventDefault()
		setPicStatus('ready')
		setPreview(null)
		setFile([])
		setTitle('')
	}


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

	const handleSubmit = async (event) => {
		event.preventDefault()

		if (!file[0]) return

		const newDream = file[0]

		const formData = new FormData()

		formData.append('file', newDream)
		formData.append('upload_preset', 'dreams')
		formData.append('name', title)

		const data = await fetch('https://api.cloudinary.com/v1_1/dnvibzwty/image/upload', {
			method: 'POST',
			body: formData
		}
		).then(res => res.json())
		
		setImgSrc(data.secure_url)
	console.log(data.secure_url)

		setUploadData(data)
	console.log(imgSrc)
	console.log(data)

	// push to data center for photoAlbum

	setPicStatus('ready')
	}


	const { acceptedFiles, getRootProps, getInputProps } = useDropzone({ onDrop })

	return (
		<div className="flex justify-center md:justify-end md:mx-28 items-center md:text-4xl text-secondary">
			<form className="dropzone flex flex-col items-center md:my-40 md:items-end space-y-10" id="dream-dropzone">
				{/* start off */}
				{picStatus === 'ready' && (
					<div {...getRootProps()} className="w-48 md:w-96 h-48 md:h-96 bg-red border-8 border-highlight rounded-3xl flex items-end">
						<input {...getInputProps()} placeholder="Place Your dream" />
						<span className="text-highlight tracking-widest leading-loose text-end px-5" >Picture of your Dream</span>
					</div>
				)}
			</form>
			
			{/* preview before save */}
			{picStatus === 'preview' && (
				<form onSubmit={handleSubmit} method="post" className="dropzone flex flex-col items-center md:my-40 md:items-end space-y-10" id="dream-dropzone">
					<img src={preview} className="w-48 md:w-96 h-48 md:h-96 border-8 border-highlight rounded-3xl flex items-end" />

					<Input 
					onChange={handleTitle}
					type='text'
					name='title'
					id='title'
					placeholder='your dream...'
					/>
					<Button type="submit" text="Save Your Dream"/>
					<ButtonSecondary text="Clear" type="button" onClick={handleClear}/>
				
				</form>
			)}
		</div>
	)
}

export default DreamDrop

	{/* OLD */}
					{/* <input onChange={handleTitle} type='text' name="title" id="title" placeholder='Title Your Dream' className="placeholder-primary rounded-3xl px-3" /> */}
					{/* <button type="submit" className="text-primary font-semibold p-5 tracking-tighter text-xs bg-secondary rounded-full border-2 border-highlight hover:bg-green hover:border-0 md:text-base lg:text-lg">Add Your Dream</button> */}