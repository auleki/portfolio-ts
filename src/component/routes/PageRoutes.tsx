import { Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Header from '../pages/Header'
import Projects from '../pages/Projects'
import Services from '../pages/Services'
import Skills from '../pages/Skills'

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  )
}

export default PageRoutes