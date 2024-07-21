import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import './index.css'
import MainLayout from './layouts/MainLayout.jsx'
import AboutMe from './pages/AboutMe.jsx'
import Portfolio from './pages/Portfolio.jsx'
import ContactMe from './pages/ContactMe.jsx'


const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />} >
      <Route path='/aboutme' element={<AboutMe />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/contactme' element={<ContactMe />} />

    </Route>
  )
)



const App = () => {

  return (
    <RouterProvider router={router} />
  )
}

export default App
