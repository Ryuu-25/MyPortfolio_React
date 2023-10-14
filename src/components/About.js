import React from 'react'
import { FaBootstrap } from 'react-icons/fa'

const About = () => {
  return (
    <div className='container-fluid bg-light pt-5 d-flex flex-column align-items-center min-vh-100'>
      <p className="text-center lead m-4">
        I'm a full stack web developer with a little experience in web development and coding. I love to create responsive websites using ReactJS, JavaScript, HTML5, CSS3, Bootstrap,Node js ,expressjs and mongo Db. 
       I've done multiple small projects to learn basics and now doing more complex projects. 

      </p>
      <h3 className='pt-5 pb-2 custom-color'>Languages and tools I use:</h3>
      <p className='lead'>
        <FaBootstrap className='m-2' style={{width:"35", height:"35", color: '#7a14f5'}}/>
      
      </p>
      
    </div>
  )
}

export default About
