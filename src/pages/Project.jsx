import { Link } from 'react-router-dom'
import Button from '../components/Utils/Button'
import ButtonSecondary from '../components/Utils/ButtonSecondary'
import Headings from '../components/Utils/Headings'
import { FaGithub } from 'react-icons/fa'

const Project = () => {
	return (
		<div className='page flex flex-col m-10 space-y-16 md:space-y-24 lg:space-y-0'>

			<div className='flex flex-col space-y-6 md:space-y-10 lg:space-y-24'>
				<Headings text='Project Title' />

				<div className='tags flex space-x-4 justify-center text-xs text-highlight tracking-wider md:justify-start lg:ml-10 lg:text-base'>
					<div className='tag bg-green rounded-3xl text-center'>
						<p className='px-3 py-1 '>tag</p>
					</div>
					<div className='tag bg-green rounded-3xl text-center'>
						<p className='px-3 py-1 '>tag</p>
					</div>
					<div className='tag bg-green rounded-3xl text-center'>
						<p className='px-3 py-1 '>tag</p>
					</div>
					<div className='tag bg-green rounded-3xl text-center'>
						<p className='px-3 py-1 '>tag</p>
					</div>
					<div className='tag bg-green rounded-3xl text-center'>
						<p className='px-3 py-1 '>tag</p>
					</div>

				</div>
			</div>

			<div className='links flex flex-col items-center space-y-5 md:space-y-10 lg:items-end lg:justify-start lg:mx-20 xl:mx-48'>
				<div className='video border-5 border-shadow bg-highlight rounded-3xl w-60 h-40 md:w-80 md:h-60 lg:w-96 lg:h-80'></div>
				<div className='buttons flex space-x-5 items-center'>
					<Link to=""><Button text='Website'> </Button></Link>
					<Link to=""><ButtonSecondary text='Code' icon={<FaGithub className='m-1' />} ></ButtonSecondary></Link>
				</div>
			</div>

			<div className='paragraph bg-highlight text-secondary border-4 border-yellow rounded-3xl lg:w-1/3 lg:absolute lg:top-2/3'>
				<p className='p-5 text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus commodi accusantium delectus assumenda omnis! Rerum, earum. Incidunt ipsum, at culpa ratione similique eligendi, consectetur ex aperiam non magni quasi nostrum!
				</p>
			</div>

		</div>
	)
}

export default Project