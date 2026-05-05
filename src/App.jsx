import { useState } from 'react'
import './App.css'
import './assets/font/font.css'
import HomePage from './pages/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import PortfolioPage from './pages/PortfolioPage'

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

          </Route>
        </Routes>

      </BrowserRouter>
     
    </>
  )
}

export default App
