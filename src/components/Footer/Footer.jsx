import React from 'react'
import { Link } from "react-scroll";
import './Footer.scss'
import logo from '../../img/header/logo.webp'

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='footer-container'>
                    <div className='footer-logo'>
                        <img src={logo} style={{ height: '218px', width: '240px' }} alt="logo" />
                    </div>
                    <nav className='footer-nav'>
                        <ul>
                            <li><Link
                                activeClass="active"
                                to="title"
                                spy={true}
                                smooth={true}
                                duration={700}
                                offset={-120}
                            >
                                Home
                            </Link>
                            </li>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    duration={700}
                                    offset={-120}
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="contact-us"
                                    spy={true}
                                    smooth={true}
                                    duration={700}
                                    offset={-120}
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className='footer-subscribe'>
                        <form action="submit">
                            <input type="text" placeholder='Subscribe Newsletter' />
                            <button className='footer-btn'>
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='copyright'>
                <span>© 2024 Rainbow Icecream Landing Page</span>
            </div>
        </footer>
    )
}
