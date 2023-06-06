import React from 'react'
import './about.css'
import kp from '../../assets/kp.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
   <section id='about'>
   <h5>Get to Know</h5>
   <h2>About Me</h2>

   <div className="container about__container">
    <div className="about__me">
      <div className="about__me-image">
        <img src={kp}  alt="About Image" />
      </div>
    </div>

    <div className="about__content">
      <div className="about__cards">
        <div className="card">
        <article className='about__card'>
          <FaAward className='about__icon'/>
          <h5>Experience</h5>
          <small>two years Working</small>
        </article>
        </div>
        <div className="card">
         <article className='about__card'>
          <FiUsers className='about__icon'/>
          <h5>Clients</h5>
          <small>5+ Worldwide</small>
        </article>
        </div>
        <div className="card">
         <article className='about__card'>
          <VscFolderLibrary className='about__icon'/>
          <h5>Projects</h5>
          <small>15+ Completed Projects</small>
        </article>
         </div>
      </div>
      
      <div className='text'>
      <p>
       Hi there. My name is Fotabong Puissance.
       I'm a computer engineering student at the 
       Faculty of Engineering and Technology, University of Buea.
       Thanks for visiting my profile.
       Looking forward to interacting with you.
      </p>
      </div>
      <a href="#contact" className='btn btn-primary'>Let's chat</a>
     </div>
   </div>
   </section>
  )
}

export default About

