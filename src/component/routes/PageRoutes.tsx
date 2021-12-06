import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Header from '../pages/Header'
import Portfolio from '../pages/Portfolio'
import Services from '../pages/Services'
import Skills from '../pages/Skills'

const PageRoutes = () => {
  const location = useLocation()
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </AnimatePresence>
  )
}

export default PageRoutes