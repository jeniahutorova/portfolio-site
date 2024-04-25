import React from 'react'
import "./skills.css"
import Frontend from './Frontend'
import Backend from './Backend'
function Skills() {
  return (
    <section id="skills">
    <h2 className='skills__header'>Skills</h2>
    <p className='skills__sub'>My technical level</p>
    <div className='skills__container'>
       <Frontend />
       <Backend />
       
    </div>
    </section>
  )
}

export default Skills