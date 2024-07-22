import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import './index.css'
import MainLayout from './layouts/MainLayout.jsx'
import AboutMe from './pages/AboutMe.jsx'
import Portfolio from './pages/Portfolio.jsx'
import ContactMe from './pages/ContactMe.jsx'
import Resume from './pages/Resume.jsx'


const App = () => {


const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />} >
      <Route index element={<AboutMe />} />,
      <Route path='/about' element={<AboutMe />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/contact' element={<ContactMe  />} />
      <Route path='/resume' element={<Resume />} />

    </Route>
  )
)





  return (
    <RouterProvider router={router} />
  )
}

export default App
