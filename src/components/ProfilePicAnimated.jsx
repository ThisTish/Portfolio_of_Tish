import React from 'react'
import profilePic from '../assets/images/profilePic.mp4'

function ProfilePicAnimated() {


	return (
		<>
		{/* add loader */}
			<div className='mx-auto rounded-3xl overflow-hidden z-10 mb-7 max-w-96 sm:w-64 md:w-72 lg:w-96 md:scale-x-[-1]'>
				<video autoPlay muted>
					<source src={profilePic} type='video/mp4'/>
				</video>
			</div>
		</>
	)
}

export default ProfilePicAnimated
