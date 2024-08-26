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
			<div className="container mx-auto" >
				{dreams.map((dream) => {
					const imagePath = images[dream.image]
					return (
						<section className='h-screen flex snap-start' key={dream.id}>

							{/* dream words */}
							<div className='w-3/5'>
								<div className='flex flex-col items-center justify-center h-screen ml-10 border-5 border-yellow background-highlight text-secondary'>
									<p>{dream.header}</p>
									<p>{dream.description}</p>
									<p>{dream.plan}</p>
								</div>
							</div>

							{/* dream pics */}
							<div className='w-2/5 flex items-center justify-center'>
								<img src={imagePath} alt="" className="w-96 h-96 rounded-full" />
							</div>
						</section>
					)
				})}
			</div>
		</>
	)
}

export default MyDreams