const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const port = 3002;

app.use(cors());

app.get('/api/photos', async (req, res) => {
	const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
	const apiKey = import.meta.env.VITE_CLOUDINARY_API_KEY
	const apiSecret = import.meta.env.VITE_CLOUDINARY_API_SECRET // Replace with your Cloudinary API secret

	try {
		const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/resources/image`, {
			method: 'GET',
			headers: {
				Authorization: `Basic ${Buffer.from(`${apiKey}:${apiSecret}`).toString('base64')}`,
			},
		});

		if (!response.ok) {
			throw new Error('Failed to fetch photos');
		}

		const data = await response.json();
		res.json(data);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

app.listen(port, () => {
	console.log(`Proxy server running at http://localhost:${port}`);
});