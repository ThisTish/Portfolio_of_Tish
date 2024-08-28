import { useDropzone } from "react-dropzone"
import { useCallback, useState } from "react"

const DreamDrop = () => {
	const [preview, setPreview] = useState(null)
	const [file, setFile] = useState([])
	const [picStatus, setPicStatus] = useState('ready')

	console.log(picStatus)

	const onDrop = useCallback(async (acceptedFiles) => {
		const file = new FileReader()
	console.log(file)
		file.onload = () => {
			setPreview(file.result)
		}
		setPicStatus('preview')
		file.readAsDataURL(acceptedFiles[0])
	console.log(picStatus)
		setFile(acceptedFiles)
	console.log(preview)
	console.log(file)
	}, [])


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
					<form>
						<img src={preview}
						className="w-48 md:w-96 h-48 md:h-96 border-8 border-highlight rounded-3xl flex items-end"/>

							
						<input type='text' placeholder='Title Your Dream' className="placeholder-primary rounded-3xl px-3" />
						<button type='submit' className="text-primary font-semibold p-5 tracking-tighter text-xs bg-secondary rounded-full border-2 border-highlight hover:bg-green hover:border-0 md:text-base lg:text-lg">Add Your Dream</button>
					{/* </div> */}
					</form>
				)}
		</div>
	)
}

export default DreamDrop