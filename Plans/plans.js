// Acceptance Criteria

//!GIVEN a single-page application portfolio for a web developer
// !WHEN I load the portfolio
// !THEN I am presented with a page containing a header, a section for content, and a footer
	// todo deploy to Netlify
	// // App.jsx file:
		// // HEADER components
		// // CONTENT SECTION components
		// // FOOTER components

// !WHEN I view the header
// !THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
	// // design & create HERO component
	// // design & create name* graphic
	// // design & create header* component
	
// !WHEN I view the navigation titles
// !THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
	// // create links*:
		// // About Me Link
		// // Portfolio Link
		// // Contact Link
		// // Resume
	// // ternary() conditional statement to for background and/or other styles to stay in hover status by passing ({ isActive })
	//  //isActive ? className="text-white bg-black" : className="text-black bg-white"--can also make the classes a function/component
	// no need for useState, isActive is native
		//  make variable() and setVariable ({ isActive })
			// const [isActive, setIsActive] = useState(false)
		//  setVariable() when passing link
			//  to="/" setIsActive(true)

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
	// // useEffect() 
		// path / element HomePage & AboutMe
		// or index element={<aboutme />}
		

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
	// // create PORTFOLIO component
		// // design PROJECT simple description
		// // design PROJECTCARD components
			// // Title
			// // Image
				// create professional images matching tone- className="grayscale hover:grayscale-0"
		// todo fill out json file
			// todo title
			// todo imgs
			// todo Links
				// todo Deployed Site
				// todo GitHub site
			// todo Description

// !WHEN I am presented with the Contact section
// !THEN I see a contact form with fields for a name, an email address, and a message
	// // design form*
		// // input for Name
			// // functions useStates() for input.value
		// // input for Email
			// // functions useStates() for input.value
		// // input for Message
			// // functions useStates() for input.value
		// // Submit Button
		// Cancel Button
	// // create FORM component

// !WHEN I move my cursor out of one of the form fields without entering text
// !THEN I receive a notification that this field is required
	// ? create If() statement using useState('')
		// *isFocused
	// *add accent-* to show when active, and when completed?


// !WHEN I enter text into the email address field
// !THEN I receive a notification if I have entered an invalid email address
	// ? create If() statement with useState('')
	// ? function to verifyEmail()
	// todo use icon to notify it is valid
// !WHEN I am presented with the Resume section
// !THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
	// // design RESUME component
	// todo create link for resume to be downloaded
		// todo button for pdf
		// todo button for word
	// todo create Proficiencies
		// todo more icons-fa did not have all i want

// !WHEN I view the footer
// !THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter)
	// // design Footer*
	// // find/use social media icons*
	// // create FOOTER
		////react-fa-icons?


		// todo list for 7/23: 
			// *contact form
				// add contact info
				// //how to handle
				// *how to alert for required fields (react-toastify)
				// *how to validate email
			// * content
				// *project.json file
				// *aboutMe
			// *md: & lg: style
				// *take grey border off of skills box
				// *ease in on hovers-nav bar
			// *more icons
			// //email links
			// *loaders(react-spinners)
			// *404

			// *make nav bar slider

		// ! when loading, AboutMe link isn't active.

// *COMPONENTS
	// / HEADER
		// / NAVBAR
	// / CONTENT
		// / HERO W/ NAME
	// TODO ABOUTME
		// // PHOTO
		// TODO DESCRIPTION
	// // PORTFOLIO
		// // PROJECTCARDS
	// TODO RESUME
		// // RESUME
		// // link for download
		// TODO PROFICIENCIES
	// // FOOTER
	// // CONTACT

// *DESIGN
	// // wholePage
	// ?dark mode
		// // figure out colorscheme
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
		// // look into animations
		// // look into react design components
		// // header
		// // logo? image?
			// // navbar
		// // hero
			// // name
		// // aboutme
			// // pic
			// // description
		// // portfolio
			// // projectCards
				// // links
				// // image
				// // description
		// // resume section
			// // resume link
			// // create resume
			// // proficiencies
		// // contact form
		// // footer
			// // socialMedia Icons

	// *IMAGES
		// // name
		// // pic
		// todo projects(6)
		// ? background images/floofy

	// *ICON
		// ?odo Hamburger menu for sm:
		// ?	*or icons-AboutMe, Portfolio, ContactMe, Resume
		//todo circle icons for validating form infos
		//? Resume Download
		// // socials
			// // GitHub
			// // LinkedIn
			// // Email
			// // Instagram
			// // Twitter
		// todo proficiencies
			// // HTML
			// // CSS
			// // JavaScript
			//  //Node.js
			// // React
			// to//do Express.js
			// to//do SQL
			// to//do NoSQL
			// to//do Sequelize
			// to//do Mongoose
			// to//do TailwindCSS
			// to//do Handlebars
			// tod//o EJS
			// to//do Bootstrap
			// to//do Figma
			// to//do JQuery
			// to//do Framer

		

//*FUNCTIONS
	// TODO USESTATES
		// // for isActive
		// todo form inputs
			// todo required fields 
			// todo verify email
	// TODO USEEFFECTS
		// todo load on aboutMe
		// todo project display section

//! HAVE FUN, STAY CALM, MAKE IT ME