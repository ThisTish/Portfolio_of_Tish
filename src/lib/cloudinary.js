// export const getDreams = async () => {

// 	const url = `curl https://${import.meta.env.VITE_CLOUDINARY_API_KEY}:${import.meta.env.VITE_CLOUDINARY_API_SECRET}@api.cloudinary.com/v1_1/<cloud_name>/resources/image`
// 	try{
// 	const response = await fetch(`${url}?prefix=portfolio/dreams`, {
// 		headers:{
// 			Authorization: `Basic ${btoa(`${import.meta.env.VITE_CLOUDINARY_API_KEY}:${import.meta.env.VITE_CLOUDINARY_API_SECRET}`)}`
// 		}
// 	})

// 		if(!response.ok){
// 			throw new Error('Failed to fetch dreams')
// 		}

// 		const {data} = await response.json()
// 		return data
// 	}catch (error){
// 		console.error(`Error fetching dreams: ${error}`)
// 	}
// }