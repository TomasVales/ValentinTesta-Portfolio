import './index.css'
import NavBar from './sections/NavBar'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import AboutMe from './sections/AboutMe'
import Contact from './sections/Contact'
import Experience from './sections/Experience/Experience'
import Education from './sections/Experience/Education'
import Footer from './sections/Footer'
import './i18n'


function App() {

  return (
    <>
      <NavBar></NavBar>
      <Hero></Hero>
      <Projects></Projects>
      <Experience></Experience>
      <AboutMe></AboutMe>
      <Contact></Contact>
      <Footer></Footer>
    </>

  )
}

export default App
