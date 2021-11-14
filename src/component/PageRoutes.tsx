import { Route, Routes } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Header from './Header'
import Projects from './Projects'
import Qualifications from './Qualifications'
import Services from './Services'
import Skills from './Skills'

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/qualifications" element={<Qualifications />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  )
}

export default PageRoutes