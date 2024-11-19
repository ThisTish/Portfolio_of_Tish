import React from 'react'
import ServiceCard from './ServiceCard'
import { CgAbstract, CgSmileMouthOpen, CgWebsite } from 'react-icons/cg'
import Headings from '../Utils/Headings'
import Button from '../Utils/Button'
import { useNavigate } from 'react-router-dom';




function Services() {

	const handleClick = () => {
		const navigate = useNavigate();
		navigate('/projects');
	}

  return (
	<div className=' bg-gradient-to-b from-secondary to-green py-20'>
	<Headings text={'Services'} />
	<div className='flex flex-col md:flex-row py-10'>
		<ServiceCard icon={<CgWebsite size={75}/>} title={'Websites'} description={'lsidkemmnbjkc'} border={'yellow'}/>
		<ServiceCard icon={<CgAbstract size={75}/>} title={'Web Applications'} description={'ldkcilsndmkckjwbnendkjfjk '} border={'green'} />
		<ServiceCard icon={<CgSmileMouthOpen size={75}/>} title={'Collaborations'} description={'sdklcianw'} border={'red'}/>
	</div>
	<div className='flex justify-end mx-20'>
		<Button text={'See more -->'} onClick={handleClick}/>
	</div>
	</div>
  )
}

export default Services