import React from 'react'
import Title from './Title/Title'
import About from './About/About'
import Products from './Products/Products'
import ContactUs from './ContactUs/ContactUs'
import Footer from '../Footer/Footer'
import Flavor from './Flavor/Flavor'

export default function Content() {
    return (
        <main>
            <Title />
            <About />
            <Products />
            <Flavor/>
            <ContactUs/>
            <Footer />
        </main>
    )
}
