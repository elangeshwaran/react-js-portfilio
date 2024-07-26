import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profie_img from '../../assets/about_profile.svg'

const About = () => {
  return (
    <div  id="about" className='about'>
         <div className='about-title'>
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" /> 
            </div> 
    <div className='about-sections'>
        <div className='about-left'>
            <img src={profie_img} alt="" />
             </div>
            <div className='about-right'>
                <div className='about-para'>
                    <p>I'm a Frontend Developer with a passion for creating visually stunning and user-friendly websites. I have a strong background in HTML, CSS, JavaScript, and React, and I'm always eager to learn new technologies and stay up-to-date with industry trend..</p>
                    <p>My passion for frontend development is not only about the design and layout, but also the functionality and user experience. I enjoy creating websites that are both visually appealing and easy to use.</p>
                </div>
                <div className='about-skills'>
                    <div className='about-skill'><p>HTML&CSS</p><hr style={{width:'90%'}}/></div>
                    <div className='about-skill'><p>JavaScript</p><hr style={{width:'50%'}}/></div>
                    <div className='about-skill'><p>React</p><hr style={{width:'70%'}}/></div>
                    <div className='about-skill'><p>Python</p><hr style={{width:'50%'}}/></div>
                    <div className='about-skill'><p>Django</p><hr style={{width:'60%'}}/></div>   
                    <div className='about-skill'><p>canva</p><hr style={{width:'40%'}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className='about-achievement'>
                <h1>0</h1>
                <p>Years of Experience</p>
                </div>
                <hr/>
                <div className='about-achievement'>
                    <h1>10+</h1>
                 <p>Projects Completed</p>
                </div>
                <hr/>
        </div>
    </div>

  )
            
}  

export default About
