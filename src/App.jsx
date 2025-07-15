import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Navbar } from 'react-bootstrap';
import Portfolio from './Porfolio/navbar';
import Home from './Porfolio/home';
import About from './Porfolio/abou';
import Skill from './Porfolio/sill';
import Project from './Porfolio/Project';
import Education from './Porfolio/Education';
import Contact from './Porfolio/contact';



function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Portfolio />
    <Home />
    <About />
    <Skill />
    <Project />
    <Education />
    <Contact />
    </>

  )
}

export default App
