import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, BrowserRouter, Routes } from 'react-router-dom'
import './index.css'
import MainLayout from './layouts/MainLayout.jsx'
import AboutMe from './pages/AboutMe.jsx'
import Portfolio from './pages/Portfolio.jsx'
import ContactMe from './pages/ContactMe.jsx'
import Resume from './pages/Resume.jsx'
import { ThemeProvider } from './components/ThemeProvider.jsx'


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
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>


  )
}

export default App
