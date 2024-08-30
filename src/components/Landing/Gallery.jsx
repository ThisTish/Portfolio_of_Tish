import { RowsPhotoAlbum } from "react-photo-album"
import "react-photo-album/rows.css"
import { useState, useEffect } from "react"
// import { getDreams } from "../../lib/cloudinary"

// const photos = [
// 	{ src: "./assets/photo-album/photos/daudi-aissa9M0UkSATRrgk-unsplash.jpg", width: 800, height: 700 },
// 	{ src: "./assets/photo-album/photos/masrur-rahman-b1LD1iylfpQ-unsplash.jpg", width: 800, height: 700 },
// 	{ src: "./assets/photo-album/photos/nikolett-emmert-G7FfAsW-Xj0-unsplash.jpg", width: 800, height: 700 },
// 	{ src: "./assets/photo-album/photos/robert-ritchie-RP-GsXOFZTw-unsplash.jpg", width: 800, height: 700 },
// 	{ src: "./assets/photo-album/photos/simon-berger-9GL6YGDJ-tw-unsplash.jpg", width: 800, height: 700 }
// ]

const getDreams = async () => {

	const apiKey = import.meta.env.VITE_CLOUDINARY_API_KEY
	const apiSecret = import.meta.env.VITE_CLOUDINARY_API_SECRET
	const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME

	const credentials = btoa(`${apiKey}:${apiSecret}`)
	const url = `https://api.cloudinary.com/v1_1/${cloudName}/resources/image`
}


const Gallery = () => {

	const getDreams = async () => {

		const apiKey = import.meta.env.VITE_CLOUDINARY_API_KEY
		const apiSecret = import.meta.env.VITE_CLOUDINARY_API_SECRET
		const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
	
		
		const results = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/resources/image`, {
			method: 'GET',
			headers: {
				// Authorization: `Basic ${btoa(`${apiKey}:${apiSecret}`)}`
				Authorization: `Basic ${Buffer.from(`${apiKey}:${apiSecret}`).toString('base64')}`
			}
		}).then(res => res.json())
		console.log(results)
		
	}





	return (
		<h1>hi</h1>
	)
}

export default Gallery











// then find srcs?
