import ProfilePicAnimated from "../components/ProfilePicAnimated"
const AboutMe = () => {


	return (
		<div className="flex flex-col mb-20">
			<h2 className="text-highlight text-3xl font-bold [text-shadow:_-2px_4px_0_var(--shadow)] hidden md:block mx-3 my-1 lg:m-16 lg:text-end md:text-5xl lg:text-7xl">About Me</h2>
			<div className="flex flex-col-reverse sm:flex-row md:mt-14 md:items-center">
				{/* about me */}
				<div className="container border-green border-8 space-y-3 px-3 pb-14 -mt-10 mx-auto rounded-br-3xl rounded-bl-3xl border-t-0 bg-highlight max-w-96 md:border-t-8 md:rounded-3xl ">
					<h3 className="text-red text-xl font-bold pt-10 lg:text-3xl ">aboutMe</h3>

					<p className="text-secondary px-5 py-5 font-semibold text-end lg:text-lg">
						&nbsp;&nbsp;&nbsp;&nbsp;I vividly remember coming home after my first typing class in 5th grade and declaring to my mom, <span className="text-green brightness-75">"When I grow up, I want to type!"</span> Before even that, I remember at a very young age while learning how to count that <span className="text-green brightness-75">it's just a pattern!</span> Simple enough. Ever since then I have been obsessed with finding patterns all around me. On top of that, I've always loved playing games, card games, board games, and <span className="text-green brightness-75">especially puzzle games!</span> With these three things combined, I feel like I was made to be in this field of programming and web development. My obsessions with <span className="text-green brightness-75">learning, data, and research</span> push this point even further.
						I firmly believe that life is meant for learning and experiencing as much as possible!
					</p>
				</div>

				{/* add spinner */}
				<ProfilePicAnimated />
			</div>

			<div className="flex flex-col lg:flex-row lg:items-end lg:space-x-12 lg:mr-24">
				{/* loves */}
				<div className=" border-yellow border-8 space-y-3 px-3 pb-14 -mt-9 mx-auto rounded-3xl bg-highlight">
					<h3 className="text-red text-xl font-bold flex justify-end py-5 lg:text-3xl">gratitudeThings</h3>
					<p className="text-secondary px-5 font-semibold lg:text-xl">
						let loves = &#123;
					</p>
					<ul className="text-secondary px-5 font-semibold lg:text-lg lg:tracking-wide">
						<li>&nbsp;&nbsp;&nbsp;&nbsp;pets: &#123;
							<ul>
								<li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fibonacci,</li>
								<li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Max,</li>
								<li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Coach Steve</li>
								<li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;,</li>
							</ul>
						</li>
						<li>&nbsp;&nbsp;&nbsp;&nbsp;disc golf,</li>
						<li>&nbsp;&nbsp;&nbsp;&nbsp;yarn,</li>
						<li>&nbsp;&nbsp;&nbsp;&nbsp;puzzle games,</li>
						<li>&nbsp;&nbsp;&nbsp;&nbsp;food:&#123;
							<ul>
								<li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cooking,</li>
								<li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;trying new restaurants</li>
								<li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;,</li>
							</ul>
						</li>
						<li>
							&nbsp;&nbsp;&nbsp;&nbsp;plants:&#123;
							<ul>
								<li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;indoor foliage,</li>
								<li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;vegetable garden,</li>
								<li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;flowers</li>
								<li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;,</li>
							</ul>
						</li>
						<li>&nbsp;&nbsp;&nbsp;&nbsp;podcasts,</li>
						<li>&nbsp;&nbsp;&nbsp;&nbsp;concerts,</li>
						<li>&nbsp;&nbsp;&nbsp;&nbsp;reading</li>
					</ul>
				</div>

				{/* random facts */}
				<div className="container border-green border-8 space-y-3 px-3 pb-14 -mt-7 mx-auto max-w-lg rounded-3xl bg-highlight">
					<h3 className="text-red text-xl font-bold  py-5 lg:text-3xl">randomFacts</h3>
					<p className="text-secondary px-5 font-semibold text-end lg:text-lg lg:pb-7">
						&nbsp;&nbsp;&nbsp;&nbsp;I've been <span className="text-green brightness-75">crocheting</span> since I was 6 years old and have had some unique work experiences, including working on a train in <span className="text-green brightness-75">Alaska</span> and starting my first job at a resort in <span className="text-green brightness-75">Island Park, ID, near Yellowstone</span>. A while back, I placed second in the state for <span className="text-green brightness-75">women's disc golf</span>. While we love to throw them, my husband and I also enjoy <span className="text-green brightness-75">dyeing discs.</span> By the way, I'm a <span className="text-green brightness-75">Capricorn.</span>
					</p>
				</div>
			</div>

			{/* want to learn */}
			<div className="border-yellow border-8 space-y-3 px-3 pb-7 -mt-9 mx-auto rounded-3xl bg-highlight md:mx-0 md:self-end md:max-w-fit md:mr-4">
				<h3 className="text-red text-xl font-bold flex justify-end py-5 lg:text-3xl">learningGoals</h3>
				<p className="text-secondary px-5 font-semibold lg:text-xl">
					let furtherStudies = &#123;
				</p>
				<ul className="text-secondary px-5 font-semibold tracking-wide lg:text-lg">
					<li>&nbsp;&nbsp;&nbsp;&nbsp;knit,</li>
					<li>&nbsp;&nbsp;&nbsp;&nbsp;Italian,</li>
					<li>&nbsp;&nbsp;&nbsp;&nbsp;hand pan,</li>
					<li>&nbsp;&nbsp;&nbsp;&nbsp;calligraphy,</li>
					<ul>
						<li>&nbsp;&nbsp;&nbsp;&nbsp;technology: &#123;
							<ul>
								<li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Python,</li>
								<li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TypeScript,</li>
								<li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sass</li>
								<li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;</li>
							</ul>
							<ul>
							<li>&nbsp;&nbsp;&nbsp;&nbsp;and:
								<ul>
									<li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[...more]</li>
								</ul>
							</li>
							</ul>
						</li>
					</ul>
					<li>&#125;</li>
				</ul>
			</div>
		</div>
	)
}

export default AboutMe