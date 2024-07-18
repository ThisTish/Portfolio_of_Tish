import React from 'react'
import profilePic from '../assets/images/profilePic.mp4'

function ProfilePicAnimated() {
  return (
	<div>
		<video width="600" autoPlay muted>
			<source src={profilePic} type='video/mp4'/>
		</video>
	</div>
  )
}

export default ProfilePicAnimated


// *for future reference for smooth ui- poster only if can't play & play when in sight.
// const [showPoster, setShowPoster] = useState(true);
// const videoRef = useRef(null);

// const handleCanPlay = () => {
//   setShowPoster(false);
// };

// const handleError = () => {
//   setShowPoster(true);
// };

// useEffect(() => {
//   const videoElement = videoRef.current;
//   const observer = new IntersectionObserver(
// 	([entry]) => {
// 	  if (entry.isIntersecting) {
// 		videoElement.play();
// 	  } else {
// 		videoElement.pause();
// 	  }
// 	},
// 	{
// 	  threshold: 0.25, // Adjust as needed, 0.25 means 25% of the video should be in view
// 	}
//   );

//   if (videoElement) {
// 	observer.observe(videoElement);
//   }

//   return () => {
// 	if (videoElement) {
// 	  observer.unobserve(videoElement);
// 	}
//   };
// }, []);

// return (
//   <div style={{ position: 'relative', width: '600px' }}>
// 	{showPoster && (
// 	  <img
// 		src={thumbnail}
// 		alt="Poster"
// 		style={{
// 		  position: 'absolute',
// 		  top: 0,
// 		  left: 0,
// 		  width: '100%',
// 		  height: 'auto',
// 		  zIndex: 1,
// 		}}
// 	  />
// 	)}
// 	<video
// 	  ref={videoRef}
// 	  width="600"
// 	  controls
// 	  muted
// 	  onCanPlay={handleCanPlay}
// 	  onError={handleError}
// 	  style={{ zIndex: 0 }}
// 	>
// 	  <source src={profilePic} type="video/mp4" />
// 	  Your browser does not support the video tag.
// 	</video>
//   </div>
// );
// }