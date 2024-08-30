import { useDropzone } from "react-dropzone"
import { useCallback, useState } from "react"
import Button from "../Utils/Button"
import ButtonSecondary from "../Utils/ButtonSecondary"
import Input from '../Utils/Input'
import {FaCameraRetro } from 'react-icons/fa'

const DreamDrop = () => {
	const [preview, setPreview] = useState(null)
	const [file, setFile] = useState([])
	const [picStatus, setPicStatus] = useState('ready')
	const [title, setTitle] = useState('')
	const [imgSrc, setImgSrc] = useState(null)
	const [uploadData, setUploadData] = useState(null)
	

	const handleClear = () =>{
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
		<div className="flex justify-center items-center text-secondary md:justify-end md:mx-28  md:text-4xl ">
			<form className="dropzone flex flex-col items-center md:my-40 md:items-end space-y-10" id="dream-dropzone">
				
				{/* start off */}
				{picStatus === 'ready' && (
					<div {...getRootProps()} className="w-48 md:w-96 h-48 md:h-96 bg-red border-8 border-highlight rounded-3xl shadow-lg">
						<input {...getInputProps()} />
						<div className="flex flex-col items-center p-5 font-bold">
						<span className="text-highlight tracking-widest leading-loose text-center px-5" >Share Your Dream</span>
						<FaCameraRetro className="text-4xl text-highlight" />
						</div>
					</div>
				)}
			</form>
			
			{/* preview before save */}
			{picStatus === 'preview' && (
				<form onSubmit={handleSubmit} method="post" className="dropzone flex flex-col items-center md:my-40 md:items-end space-y-10" id="dream-dropzone">
					<img src={preview} className="w-48 md:w-96 h-48 md:h-96 border-8 border-highlight rounded-3xl flex items-end shadow-lg" />

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
			{picStatus === 'saved' && (
				<div className="flex flex-col my-10 items-center space-x-10">
				<img src={preview} className="w-48 my-10 md:w-96 h-48 md:h-96 border-8 border-highlight rounded-3xl shadow-lg" />
				<div className="flex flex-col items-center text-secondary ml-0">
				<p className="text-2xl ">Dream saved!</p>
				<p className="text-2xl ">Dream Display in progress</p>
				<p className="text-2xl ">Check back soon!</p>
				</div>
				</div>

			)}
		</div>
	)
}

export default DreamDrop

