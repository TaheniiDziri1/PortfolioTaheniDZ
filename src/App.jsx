import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import About from './components/About/About.jsx'
import Services from './components/Services/Services.jsx'
import Contact from './components/Contact/Contact.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const Page=()=>{
    return(
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Contact/>
    </>
    )
  }
  const Page1=()=>{
    return(
      <>
        <Navbar/>
        <Hero/>
      </>
    )
  }
    const Page2=()=>{
    return(
      <>
        <Navbar/>
        <About/>
      </>
    )
  }
    const Page3=()=>{
    return(
      <>
        <Navbar/>
        <Services/>
        
      </>
    )
  }

      const Page4=()=>{
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
        <Route path="/Hero" element={<Page1/>} />
        <Route path="/Home" element={<Page/>} />
        <Route path="/About" element={<Page2/>} />
        <Route path="/Services" element={<Page3/>} />
        <Route path="/Contact" element={<Page4/>} />
        <Route path="/" element={<Page/>} /> {/* Vous pouvez ajouter un route par défaut */}
      </Routes>
    </Router>
  )
}

export default App;
