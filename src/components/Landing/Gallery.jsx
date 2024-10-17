
import { useEffect } from "react"
import { RowsPhotoAlbum } from "react-photo-album"
import "react-photo-album/rows.css"

const Gallery = () => {

		
	
	useEffect(() => {
		console.log('getting dreams')
		const getDreams = async () => {
			const apiKey = import.meta.env.VITE_CLOUDINARY_API_KEY
			const apiSecret = import.meta.env.VITE_CLOUDINARY_API_SECRET
			const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
				
			try {
				const results = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/resources/image`, {
					method: 'GET',
					headers: {
						Authorization: `Basic ${btoa(`${apiKey}:${apiSecret}`)}`
					}
				}).then(res => res.json())
				console.log(results)
				return results
			} catch (error) {
				console.log(error)
			}
		}

		const fetchData = async () => {
			const results = await getDreams()
			console.log(results)
		}

		fetchData()
	}, [])

	return (
		<div className="bg-secondary">		
		<h1>hi</h1>
		<p>{results.resources}</p>
		</div>

	)
}

export default Gallery











// then find srcs?
