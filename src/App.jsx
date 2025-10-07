import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import About from './components/About/About.jsx'
import Experiences from './components/Experiences/Experiences.jsx'
import Education from './components/Education/Education.jsx'
import Contact from './components/Contact/Contact.jsx'
import Certifications from './components/Certifications/Certifications.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  // Page d'accueil complète (Home)
  const HomePage = () => {
    return(
      <>
        <Navbar/>
        <Hero/>
        <About/>
        <Experiences/>
        <Education/>
        <Certifications/>
        <Contact/>
      </>
    )
  }

  // Pages individuelles pour la navigation
  const HeroPage = () => {
    return(
      <>
        <Navbar/>
        <Hero/>
      </>
    )
  }

  const AboutPage = () => {
    return(
      <>
        <Navbar/>
        <About/>
      </>
    )
  }

  const ExperiencesPage = () => {
    return(
      <>
        <Navbar/>
        <Experiences/>
      </>
    )
  }

  const EducationPage = () => {
    return(
      <>
        <Navbar/>
        <Education/>
      </>
    )
  }
  const CertificationsPage = () => {
    return(
      <>
        <Navbar/>
        <Certifications/>
      </>
    )
  }

  const ContactPage = () => {
    return(
      <>
        <Navbar/>
        <Contact/>
      </>
    )
  }

  return (
    <Router>
      <Routes>
        {/* Route pour la page d'accueil complète */}
        <Route path="/" element={<HomePage/>} />
        <Route path="/home" element={<HomePage/>} />
        
        {/* Routes pour les pages individuelles */}
        <Route path="/hero" element={<HeroPage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/experiences" element={<ExperiencesPage/>} />
        <Route path="/education" element={<EducationPage/>} />
        <Route path="/certifications" element={<CertificationsPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        
        {/* Route de fallback - redirige vers la home */}
        <Route path="*" element={<HomePage/>} />
      </Routes>
    </Router>
  )
}

export default App;