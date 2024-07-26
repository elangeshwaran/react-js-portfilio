import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
    const onSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
  
      formData.append("access_key", "cb09c3a6-f678-46d8-9560-bd993da5b1b7");
  
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
  
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());
  
      if (res.success) {
       alert("Message sent successfully");
      }
    };
  return (
    <div  id="contact" className='contact'>
      <div className='contact-title'>
        <h1>Get in touch</h1>
        <img src= {theme_pattern} alt="" />
      </div>
       <div className='contact-section'>
        <div className='contact-left'>
            <h1>Let's discuss</h1>
            <p>Ready to take it to the next level? Let's get in touch.</p>
            <div className='contact-details'>
                <div className='contact-detail'>
                    <img src={mail_icon} alt="" />
                        <p>elangeshwaran58@gmail.com</p>
                    </div>
                </div>
                <div className='contact-detail'>
                    <img src={call_icon} alt="" />
                    <p>6379597965</p>
                     </div>
                     <div className='contact-detail'>
                    <img src={location_icon} alt="" />
                        <p>erode</p>
                    </div>
                </div>
                
                     <form onSubmit={onSubmit} className='contact-right'>
                        <label htmlFor=''>Your name</label>
                        <input type="text" placeholder='Enter your name' name='name' />
                        <label htmlFor=''>Your email</label>
                        <input type="email" placeholder='Enter your email' name='email'/>
                        <label htmlFor=''>Message</label>
                        <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                        < button type='submit' className='contact-submit'>Submit now</button>
                     </form>
            </div>
            </div>
       
  )
}

export default Contact
