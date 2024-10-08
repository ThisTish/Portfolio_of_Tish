import dreams from '../../data/dreams.json'
import recycle from '../../assets/images/recycle.jpg'
import together from '../../assets/images/together.jpg'
import learn from '../../assets/images/learn.jpg'
import donate from '../../assets/images/donate.jpg'
import fun from '../../assets/images/fun.jpg'

const images =
{
	"recycle.jpg": recycle,
	"together.jpg": together,
	"learn.jpg": learn,
	"donate.jpg": donate,
	"fun.jpg": fun
}

const MyDreams = () => {

	return (
	
		<>
			<div className="lg:container py-24 min-w-full space-y-12 mb-40 md:py-0 md:-pt-40" style={{ background: 'linear-gradient(to top, var(--green), var(--primary)' }} >
				{dreams.map((dream) => {
					const imagePath = images[dream.image]
					return (
						<section className=' md:flex md:snap-top' key={dream.id}>

							{/* dream words */}
							{/* animate so pictures don't show until at position. or mask? */}
							<div className='md:w-3/5'>
								<div className='flex flex-col items-center md:h-screen justify-center ml-10 border-5 border-yellow background-highlight text-highlight text-pretty space-y-4'>
									<h3 className='text-lg tracking-wider md:text-2xl lg:text-4xl'>{dream.header}</h3>
									<p className='tracking-tighter mx-12 '>{dream.description}</p>
									<p className='font-semibold tracking-wider '>{dream.plan}</p>
								</div>
							</div>

							{/* dream pics */}
							<div className='lg:w-2/5 flex items-center justify-end -mt-7 md:mt-0 md:justify-center'>
								<img src={imagePath} alt={dream.header} className="opacity-35 size-48 md:opacity-100 md:size-72 lg:size-96 rounded-full" />
							</div>
						</section>
					)
				})}
			</div>
		</>
	)
}

export default MyDreams