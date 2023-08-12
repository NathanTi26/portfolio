import './style.css'
import html from '../../assets/img/HTML5.png'
import css3 from '../../assets/img/CSS3.png'
import js from '../../assets/img/JS.png'
import react from '../../assets/img/react.png'
import mongodb from '../../assets/img/mongodb.png'
import vuejs from '../../assets/img/vuejs.png'
import nextjs from '../../assets/img/nextjs.png'
import nuxtjs from '../../assets/img/Nuxtjs.png'
import reactnative from '../../assets/img/reactnative.webp'
import typescript from '../../assets/img/typescript.webp'
import React from 'react'

function Skills(props) {
  if (props.page === 'home') {
    return (
      <div className="skills">


        <div className="profil-card">

          <h2>Mes compétences</h2>
          <div className="skills-list">  
          <img src={html} className="skills-icon" alt="HTML5" />
          <img src={css3} className="skills-icon" alt="CSS3" />
          <img src={js} className="skills-icon" alt="Javascript" />
          <img src={react} className="skills-icon" alt="React" />
          <img src={mongodb} className="skills-icon" alt="Mongo DB" />
        </div>
        </div>
        <div className="profil-card">

<h2>En apprentissage</h2>

<div className="skills-list">  
          <img src={vuejs} className="skills-icon" alt="HTML5" />
          <img src={nuxtjs} className="skills-icon" alt="CSS3" />
          <img src={nextjs} className="skills-icon" alt="Javascript" />
          <img src={reactnative} className="skills-icon" alt="CSS3" />
          <img src={typescript} className="skills-icon" alt="Javascript" />
        </div>

</div>
</div>
    )
  }
}

export default Skills
