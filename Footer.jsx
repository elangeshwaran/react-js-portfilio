import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-top'>
        <div className='footer-top-left'>
            <p>© 2023. All rights reserved.</p>
            </div>
            <div className='footer-top-right'>
                <div className='footer-email-input'>
                    <img src= {user_icon} alt="" />
                    <input type="text" placeholder='Enter your email address' />
                    </div>
                    <div className='footer-subscribe'>Subscribe</div>
                    
                </div>
                 </div>
                 <hr/>
                 <div className='footer-bottom'>
                    <p className='footer-bottom-left'>Powered by <span>Elangeshwaran</span></p>
                    <div className='footer-bottom-right'>
                        <p>Term of services</p>
                        <p>Privacy policy</p>
                        <p>Connect with me</p>
                        <a href="https://www.linkedin.com/in/elangeshwaran/">LinkedIn</a>
                        <a href="https://github.com/elangeshwaran">Github</a>
                    </div>
                 </div>  
                 </div>   
  )
}

export default Footer
