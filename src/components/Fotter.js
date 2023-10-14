import React from 'react'
import './Footer.css'
import { FaBootstrap } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import leetcode from "../assets/leetcode.png"

export default function Fotter() {
  return (
    <div className='sd'><h2>
<a href='mailto: Varun.sahith2021@vitstudent.ac.in'> Email:Varun.sahith2021@vitstudent.ac.in</a>
  
    </h2>
    <a href='https://github.com/Ryuu-25'><img className='m-2' src="https://cdn.cdnlogo.com/logos/g/31/github.svg" alt="git" width="35" height="35"/></a>
    <a href='https://github.com/Ryuu-25'><img className='m-2' src='https://cdn.cdnlogo.com/logos/l/37/linkedin.svg' width="auto" height="80"/></a>
    <a href='https://github.com/Ryuu-25'><img className='m-2' src={leetcode} alt="git" width="35" height="35"/></a>
    </div>
    

    
  )
}
