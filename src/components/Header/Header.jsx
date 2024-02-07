import React, { useState, useEffect } from 'react'
import { Link } from "react-scroll";
import logo from '../../img/header/logo.webp'
import { ReactComponent as IconClose } from './../../img/icons/icon-close.svg'
import { ReactComponent as IconOpen } from './../../img/icons/open-icon.svg';
import './Header.scss'

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])
    const [navOpen, setNavOpen] = useState(false);
    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}
        >
            <div className='container'>
                <div className="mobile-btn">
                    <button onClick={() => {
                        setNavOpen(!navOpen);
                    }}>
                        {navOpen ? <IconClose size={25} /> : <IconOpen size={25} />}
                    </button>
                </div>
                <nav className={`header-menu ${navOpen ? 'active-menu' : ''}`}>
                    <ul className='navbar'>
                        <li><Link
                            activeClass="active"
                            to="title"
                            spy={true}
                            smooth={true}
                            duration={700}
                            offset={-120}
                        >
                            Home
                        </Link></li>
                        <li><Link
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
                                to="products"
                                spy={true}
                                smooth={true}
                                duration={700}
                                offset={-120}
                            >
                                Products
                            </Link>
                        </li>
                        <li className='logo-header'><img src={logo} alt="IceCream" style={{ width: '220px', height: '200px' }} /></li>
                        <li>
                            <Link
                                activeClass="active"
                                to="flavor"
                                spy={true}
                                smooth={true}
                                duration={700}
                                offset={-120}
                            >
                                Flavor
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
            </div>
        </header>
    )
}
