import React from 'react'
import { Button } from './Button'
import './Footer.css'
import {Link} from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the adventure newsletter to receive our best vacation deals
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time
                </p>
                <div className="input-areas">
                    <form>
                        <input 
                        className="footer-input"
                        type="email" 
                        name="email" 
                        placeholder="Your Email" 
                        />
                        <Button buttonStyle='btn--outline'>Subscribe Now</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-links-wrapper">
                    <div className="footer-links-items">
                        <h2>About Us</h2>
                        <Link to='/'>How it Works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms Of Services</Link>
                    </div>
                    <div className="footer-links-items">
                        <h2>Contact Us</h2>
                        <Link to='/'>How it Works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms Of Services</Link>
                    </div>
                </div>
                <div className="footer-links-wrapper">
                    <div className="footer-links-items">
                        <h2>Videos</h2>
                        <Link to='/'>How it Works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms Of Services</Link>
                    </div>
                    <div className="footer-links-items">
                        <h2>Social Media</h2>
                        <Link to='/'>How it Works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms Of Services</Link>
                    </div>
                    <div className="footer-links-items">
                        <h2>Social Media</h2>
                        <Link to='/'>How it Works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms Of Services</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link className="social-logo">
                            TRVL <i className='fab fa-affiliatetheme'/>
                        </Link>
                    </div>
                    <small className="website-rights"> TRVL© 2021</small>
                    <div className="social-icons">
                        <Link 
                        className="social-icon-link facebook"
                        to ='/'
                        target='_blank'
                        aria-label="Facebook"
                        >
                            <i className="fab fa-facebook-f"/>
                        </Link>

                        <Link 
                        className="social-icon-link instagram"
                        to ='/'
                        target='_blank'
                        aria-label="Instagram"
                        >
                            <i className="fab fa-instagram"/>
                        </Link>

                        <Link 
                        className="social-icon-link twitter"
                        to ='/'
                        target='_blank'
                        aria-label="Twitter"
                        >
                            <i className="fab fa-twitter"/>
                        </Link>
                        
                        <Link 
                        className="social-icon-link youtube"
                        to ='/'
                        target='_blank'
                        aria-label="Youtube"
                        >
                            <i className="fab fa-youtube"/>
                        </Link>

                        <Link 
                        className="social-icon-link linkedin"
                        to ='/'
                        target='_blank'
                        aria-label="LinkedIn"
                        >
                            <i className="fab fa-linkedin"/>
                        </Link>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Footer
