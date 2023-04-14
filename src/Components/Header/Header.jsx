import React from 'react'
import "./Header.css"
import HeaderImg  from "../../assets/headerImg.png"
const Header = () => {
  return (
    <main>
      <div className='descriptionContainer'>
        <h1>
          Hi , I'm <span>
            Ahmed Tamer 
            </span>
        </h1>
        <h2>
          <span>
            Front-End {" "}
            </span>
             Developer
        </h2>
        <p>
          Someone who develop the user Interface ..🚀<br/>
          That part which user see and Interact with
        </p>
      </div>
      <img src={HeaderImg} alt="right-img" className='HeaderImg'/>
    </main>
  )
}

export default Header