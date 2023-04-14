import  React from 'react'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Skills from './Components/Skills/Skills'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'

function App() {

  return (
    <div className='App'>
      <Navbar/>
      <Header/>
      <Skills/>
      <About/>
      <Portfolio/>
      
    </div>
  )
}

export default App
