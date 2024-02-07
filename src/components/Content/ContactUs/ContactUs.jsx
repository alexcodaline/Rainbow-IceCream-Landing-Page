import React from 'react'
import './ContactUs.scss'
import facebook from '../../../img/social/facebook.webp'
import instagram from '../../../img/social/instagram.webp'
import twitter from '../../../img/social/twitter.webp'
import contactDecoration from '../../../img/social/contactDecoration.webp'

export default function ContactUs() {
  return (
    <section className='contact-us'>
      <div className='container'>
        <div className='contact-container'>
          <div className='contact-form-social'>
            <form action="submit">
              <input type="text" placeholder='Enter Your Email' />
              <button className='contact-btn'>Contact Us</button>
            </form>
            <div className='social'>
              <a href="/facebook"> <img src={facebook} style={{ height: '98px', width: '98px' }} alt="Facebook join to us" /></a>
              <a href="/instagram"><img src={instagram} style={{ height: '91px', width: '91px' }} alt="instagram join to us" /></a>
              <a href="/twitter"><img src={twitter} style={{ height: '74px', width: '74px' }} alt="twitter join to us" /></a>
            </div>
          </div>
          <img  className="contact-decor"src={contactDecoration} style={{ height: '400px', width: '400px' }} alt="contact Decoration" />
        </div>
      </div>
    </section>
  )
}
