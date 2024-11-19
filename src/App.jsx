import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, BrowserRouter, Routes } from 'react-router-dom'
import './index.css'
import MainLayout from './layouts/MainLayout.jsx'
import Landing from './pages/Landing.jsx'
import AboutMe from './pages/AboutMe.jsx'
import Portfolio from './pages/Portfolio.jsx'
import ContactMe from './pages/ContactMe.jsx'
import Resume from './pages/Resume.jsx'
import Gallery from './components/Landing/Gallery.jsx'
import { ThemeProvider } from './components/ThemeProvider.jsx'
import Project from './pages/Project.jsx'


const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />} >
            <Route index element={<AboutMe />} />,
            <Route path='about' element={<AboutMe />} />
            <Route path='portfolio' element={<Portfolio />} />
            <Route path='contact' element={<ContactMe />} />
            <Route path='resume' element={<Resume />} />
            <Route path='landing' element={<Landing />} />
            <Route path='project/:name' element={<Project />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>


  )
}

export default App
