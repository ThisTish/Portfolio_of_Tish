// Acceptance Criteria

//!GIVEN a single-page application portfolio for a web developer
// !WHEN I load the portfolio
// !THEN I am presented with a page containing a header, a section for content, and a footer
	// todo deploy to Netlify
	// todo App.jsx file:
		// todo HEADER components
		// todo CONTENT SECTION components
		// todo FOOTER components

// !WHEN I view the header
// !THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
	// // design & create HERO component
	// // design & create name* graphic
	// todo design & create header* component
	
// !WHEN I view the navigation titles
// !THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
	// todo create links*:
		// // About Me Link
		// todo Portfolio Link
		// todo Contact Link
		// todo Resume
	// todo ternary() conditional statement to for background and/or other styles to stay in hover status by passing ({ isActive })
	// * isActive ? className="text-white bg-black" : className="text-black bg-white"--can also make the classes a function/component
	// todo make variable() and setVariable ({ isActive })
		// *const [isActive, setIsActive] = useState(false)
	// todo setVariable() when passing link
		// * to="/" setIsActive(true)

// !WHEN I click on a navigation title
// !THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted
	// // import and use NavLink package
		//// <a> is <NavLink> and href="" is to=""
		////react-router
		////have to use react-router-dom
		//// 20-1-23-main.jsx
		////{ Outlet } is the component conditionally switches between routes/pages
// !WHEN I load the portfolio the first time
// !THEN the About Me title and section are selected by default
	// todo useEffect() 
		//* router option '/', aboutme
		//  useEffect = '/AboutMe', []

// !WHEN I am presented with the About Me section
//! THEN I see a recent photo or avatar of the developer and a short bio about them
	// // create photo* graphic
	// todo refine About me paragraph & sections
	// // design AboutMe* section
	// // create AboutMe* section

// !WHEN I am presented with the Portfolio section
// !THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository
	// todo design PORTFOLIO component
		// // mobile design
		// todo desktop design
	// todo create PORTFOLIO component
		// todo design PROJECT simple description
		// todo design PROJECTCARD components
			// todo Title
			// todo Image
				// *create professional images matching tone- className="grayscale hover:grayscale-0"
			// todo Links
				// todo Deployed Site
				// todo GitHub site
			// todo Description

// !WHEN I am presented with the Contact section
// !THEN I see a contact form with fields for a name, an email address, and a message
	// todo design form*
		// todo input for Name
			// todo functions useStates() for input.value
		// todo input for Email
			// todo functions useStates() for input.value
		// todo input for Message
			// todo functions useStates() for input.value
		// todo Submit Button
		// todo Cancel Button
	// todo create FORM component
	// *add accent-* to show when active, and when completed?

// !WHEN I move my cursor out of one of the form fields without entering text
// !THEN I receive a notification that this field is required
	// ? create If() statement using useState('')

// !WHEN I enter text into the email address field
// !THEN I receive a notification if I have entered an invalid email address
	// ? create If() statement with useState('')
	// ? function to verifyEmail()
	// todo use icon to notify it is valid
// !WHEN I am presented with the Resume section
// !THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
	// todo design RESUME component
	// todo create link for resume to be downloaded
	// todo create Proficiencies*

// !WHEN I view the footer
// !THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter)
	// todo design Footer*
	// todo find/use social media icons*
	// todo create FOOTER
		//* react-fa-icons?
	// ?sticky?


// *COMPONENTS
	// TODO HEADER
		// TODO NAVBAR
	// TODO CONTENT
		// TODO HERO W/ NAME
	// TODO ABOUTME
		// TODO PHOTO
		// TODO DESCRIPTION
	// TODO PORTFOLIO
		// TODO PROJECTCARDS
	// TODO RESUME
		// TODO RESUME MODAL w/ link to googleDocs link for download? or just clickable link for download
		// TODO PROFICIENCIES
	// TODO FOOTER
		// TODO CONTACT

// *DESIGN
	// todo wholePage
	// ?dark mode
		// todo figure out colorscheme
			// Blue
			// .ColorSchemeProfile-1-hex { color: #8AA6A3; }
			// Green
			// .ColorSchemeProfile-2-hex { color: #8EA66A; }
			// Yellow
			// .ColorSchemeProfile-3-hex { color: #D9B95B; }
			// Red
			// .ColorSchemeProfile-4-hex { color: #BF5349; }
			// White
			// .ColorSchemeProfile-5-hex { color: #F2F2F2; }
		// todo look into animations
		// todo look into react design components
		// todo header
		// todo logo? image?
			// todo navbar
		// todo hero
			// todo name
		// todo aboutme
			// todo pic
			// todo description
		// todo portfolio
			// todo projectCards
				// todo links
				// todo image
				// todo description
		// todo resume section
			// todo resume link
			// todo create resume
			// todo proficiencies
		// todo contact form
		// todo footer
			// todo socialMedia Icons

	// *IMAGES
		// // name
		// // pic
		// todo projects(6)
		// todo background images/floofy

	// *ICONS
		//todo Hamburger menu for sm:
			// *or icons-AboutMe, Portfolio, ContactMe, Resume
		//todo circle icons for validating form infos
		// todo Resume Download
		// todo socials
			// todo GitHub
			// todo LinkedIn
			// todo Email
			// todo Instagram
			// todo Twitter
		// todo proficiencies
			// todo HTML
			// todo CSS
			// todo JavaScript
			// todo Node.js
			// todo React
			// todo Express.js
			// todo SQL
			// todo NoSQL
			// todo Sequelize
			// todo Mongoose
			// todo TailwindCSS
			// todo Handlebars
			// todo EJS
			// todo Bootstrap
			// todo Figma
			// todo JQuery
			// todo Framer

		

//*FUNCTIONS
	// TODO USESTATES
		// todo for isActive
		// todo form inputs
			// todo required fields 
			// todo verify email
	// TODO USEEFFECTS
		// todo load on aboutMe
		// todo project display section

//! HAVE FUN, STAY CALM, MAKE IT ME