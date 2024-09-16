import { useDropzone } from "react-dropzone"
import { useCallback, useState } from "react"
import Button from "../Utils/Button"
import ButtonSecondary from "../Utils/ButtonSecondary"
import Input from '../Utils/Input'
import { FaCameraRetro } from 'react-icons/fa'

const DreamDrop = () => {
	const [preview, setPreview] = useState(null)
	const [file, setFile] = useState([])
	const [picStatus, setPicStatus] = useState('ready')
	const [title, setTitle] = useState('')
	const [imgSrc, setImgSrc] = useState(null)
	const [uploadData, setUploadData] = useState(null)


	const handleClear = () => {
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

		setUploadData(data)


		setPicStatus('saved')
	}


	const { acceptedFiles, getRootProps, getInputProps } = useDropzone({ onDrop })

	return (
		<div className="flex justify-center items-center text-secondary md:justify-end md:mx-28">
			<form className="dropzone flex flex-col items-center md:my-40 md:items-end space-y-10" id="dream-dropzone">

				{/* start off */}
				{picStatus === 'ready' && (
					<div {...getRootProps()} className="w-48 md:w-60 lg:w-96 lg:h-96 h-48 md:h-60 bg-red border-8 border-highlight rounded-3xl shadow-lg">
						<label htmlFor="dream-image" className="sr-only">Upload an Image of your Dream</label>
						<input {...getInputProps()} id="dream-image" alt="submit dream" />
						<div className="flex flex-col items-center p-5 font-bold md:space-y-4">
							<span className="text-highlight leading-loose text-center md:text-xl lg:text-3xl px-5" >Drop an image of your dream</span>
							<FaCameraRetro className="text-4xl md:text-5xl lg:text-7xl text-highlight" />
						</div>
					</div>
				)}
			</form>

			{/* preview before save */}
			{picStatus === 'preview' && (
				<form onSubmit={handleSubmit} method="post" className="dropzone flex flex-col items-center md:my-40 md:items-end space-y-10" id="dream-dropzone">
					<img src={preview} className=" border-8 border-highlight rounded-3xl flex items-end shadow-lg" />
					
					<Input
						onChange={handleTitle}
						type='text'
						id='dream-title'
						placeholder='your dream...'
						srLabel='Title your Dream'
					/>
					<Button type="submit" text="Save Your Dream" />
					<ButtonSecondary text="Clear" type="button" onClick={handleClear} />
				</form>
			)}
			{picStatus === 'saved' && (
				<div className="flex flex-col my-10 items-center space-x-10">
					<img src={preview} alt="Preview of your dream" className="w-48 my-10 md:w-96 h-48 md:h-96 border-8 border-highlight rounded-3xl shadow-lg" />
					<div className="flex flex-col text-secondary space-y-3">
						<p className="text-lg lg:text-xl ">Your Dream has been saved!</p>
						<hr className="shadow-lg border-2 border-highlight w-3/4 rounded-3xl"></hr>
						<p className="text-lg lg:text-xl ">Dream Display in progress...</p>
						<hr className="shadow-lg border-2 border-highlight w-3/4 rounded-3xl"></hr>
						<p className="text-lg lg:text-xl ">Check back soon to see yours displayed alongside others who have shared.</p>
					</div>
				</div>

			)}
		</div>
	)
}

export default DreamDrop

