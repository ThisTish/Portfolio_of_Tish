

import { RowsPhotoAlbum } from "react-photo-album"
import "react-photo-album/rows.css"

const Gallery = () => {

	const getDreams = async () => {

		const apiKey = import.meta.env.VITE_CLOUDINARY_API_KEY
		const apiSecret = import.meta.env.VITE_CLOUDINARY_API_SECRET
		const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
			
	try {
			const results = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/resources/image`, {
				method: 'GET',
				headers: {
					Authorization: `Basic ${btoa(`${apiKey}:${apiSecret}`)}`
					// Authorization: `Basic ${Buffer.from(`${apiKey}:${apiSecret}`).toString('base64')}`
				}
			}).then(res => res.json())
			console.log(results)
			return results
		
	} catch (error) {
		console.log(error)
	}
	const results = await getDreams()
	console.log(results)

	return (
		<>		<h1>hi</h1>
		<p>{results.resources}</p>
		</>

	)
}
}
export default Gallery











// then find srcs?
