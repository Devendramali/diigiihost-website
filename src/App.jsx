import { useState } from 'react'
import './App.css'
import './assets/font/font.css'
import HomePage from './pages/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import PortfolioPage from './pages/PortfolioPage'
import SoupHerb from './pages/SoupHerb'
import Blog from './pages/Blog'
import BlogDetailsPage from './pages/BlogDetailsPage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import Career from './pages/Career'
import Loma from './pages/Loma'
import Lanova from './pages/Lanova'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='/portfolio' element={<PortfolioPage />} />
            <Route path='/*' element={<PortfolioPage />} />
            <Route path='/soupherb' element={<SoupHerb />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/blog-details' element={<BlogDetailsPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/career' element={<Career />} />
            <Route path='/loma-dental' element={<Loma />} />
            <Route path='/lanova' element={<Lanova />} />

          </Route>
        </Routes>

      </BrowserRouter>
     
    </>
  )
}

export default App
