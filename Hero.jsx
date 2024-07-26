import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Resume from '../../assets/Resume.pdf'
const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt=''/>
      <h1><span>I'm Elangeshwaran k </span>Frontend developer based in India</h1>
      <p>I'm a Frontend Developer and I'm very passionate and dedicated to my work.</p>
      <div className='hero-action'>
        <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>connect with me</AnchorLink></div>
        <a href={Resume} download className='hero-resume'> My Resume</a>
      </div>
        
    </div>
  )
}

export default Hero