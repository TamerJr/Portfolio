import  React from 'react'

import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';
import { BsLinkedin ,BsGithub,BsFacebook} from 'react-icons/bs'
import {AiFillTwitterCircle} from "react-icons/ai"
import { Route, Routes } from 'react-router-dom'
import ProjectDetails from './Pages/ProjectDetails/ProjectDetails'
import Home from './Pages/Home'
import Navbar from './Components/Navbar/Navbar';
function App() {

  return (
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projectsdetails/:id' element={<ProjectDetails/>}/>
      </Routes>
      <WhatsAppWidget phoneNumber="+2001555652214"/>
      <div className='Socials'>
        <a target="_blank" href='https://www.linkedin.com/in/ahmed-tamer-jr/' className='LinkedIn' ><BsLinkedin size={30} /></a>
        <a target="_blank" href='https://github.com/TamerJr' className="Github"><BsGithub size={30} /></a>
        <a target="_blank" href='https://twitter.com/Tamer_Jr_' className="Twitter"><AiFillTwitterCircle size={35} /></a>
        <a target="_blank" href='https://www.facebook.com/profile.php?id=100028308230428' className="Facebook"><BsFacebook size={30} /></a>
      </div>
    </div>
  )
}

export default App
