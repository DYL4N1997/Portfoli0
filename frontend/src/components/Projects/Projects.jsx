import React from 'react'
import './Projects.css'
// Import Images below

const Projects = () => {
  return (
      <section id='portfolio'>
        <h5>My Work</h5>
        <h2>Projects</h2>

        <div className="container portfolio__container">
          <article className='portfolio__item'>
            <div className='portfolio__item-image'></div>
            {/* <img src={IMG1} alt="" /> */}
            <a href="https://github.com" className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank' rel="noreferrer">
            Live Demo</a>
          </article>
          <article className='portfolio__item'>
            <div className='portfolio__item-image'></div>
            {/* <img src={IMG1} alt="" /> */}
            <a href="https://github.com" className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank' rel="noreferrer">
            Live Demo</a>
          </article>
          <article className='portfolio__item'>
            <div className='portfolio__item-image'></div>
            {/* <img src={IMG1} alt="" /> */}
            <a href="https://github.com" className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank' rel="noreferrer">
            Live Demo</a>
          </article>
        </div>
      </section>
  )
}

export default Projects