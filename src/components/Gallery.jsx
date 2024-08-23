import { RowsPhotoAlbum } from "react-photo-album"
import "react-photo-album/rows.css"

// src's not found. 
// use DropZone or Dnd first to accept images
// set up cloudinary to save
// then find srcs?
const photos = [
	{ src: "./assets/photo-album/photos/daudi-aissa9M0UkSATRrgk-unsplash.jpg", width: 800, height: 700 },
	{ src: "./assets/photo-album/photos/masrur-rahman-b1LD1iylfpQ-unsplash.jpg", width: 800, height: 700 },
	{ src: "./assets/photo-album/photos/nikolett-emmert-G7FfAsW-Xj0-unsplash.jpg", width: 800, height: 700 },
	{ src: "./assets/photo-album/photos/robert-ritchie-RP-GsXOFZTw-unsplash.jpg", width: 800, height: 700 },
	{ src: "./assets/photo-album/photos/simon-berger-9GL6YGDJ-tw-unsplash.jpg", width: 800, height: 700 }
]

const Gallery = () => {
	return (
		<RowsPhotoAlbum
			photos={photos}
		/>
	)
}

export default Gallery