import React, { useEffect, useState } from 'react';
import { MasonryPhotoAlbum } from 'react-photo-album';
import 'react-photo-album/masonry.css';

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const DreamGallery = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('getting photos');
    const fetchPhotos = async () => {
      try {
        const response = await fetch('http://localhost:3002/api/photos');

        if (!response.ok) {
          throw new Error('Failed to fetch photos');
        }

        const data = await response.json();
        const photos = data.resources.map(({ secure_url, alt, width, height, display_name }) => ({
          src: secure_url,
          alt,
          width,
          height,
          display_name,
          srcSet: breakpoints.map((breakpoint) => ({
            src: secure_url,
            width: breakpoint,
            height: Math.round((height / width) * breakpoint),
          })),
        }));
        setPhotos(photos);
      } catch (error) {
        console.error('Error fetching photos:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading photos: {error.message}</div>;
  }

  return (
    <div>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div>
            <h1>Here we go again</h1>
            <MasonryPhotoAlbum photos={photos} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DreamGallery;