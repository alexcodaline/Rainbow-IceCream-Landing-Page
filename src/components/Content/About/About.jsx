import React from 'react'
import aboutImg from "../../../img/about/about-milk.webp"
import aboutImg2 from "../../../img/about/about-milk2.webp"
import './About.scss'

export default function About() {
    return (
        <section className='about'>
            <div className='container'>
                <div className="about-items-container">
                    <div className='about-title'>
                        <h2>We Care About You!</h2>
                    </div>
                    <div className='img-decor1'>
                        <img src={aboutImg} alt="Milk" />
                    </div>
                    <div className='about-desc-1'>
                        <p>Lörem ipsum krodyskade boligen om dyktigt. Hyn vedarade: pohess stenodoskade. Multit spegt. Osade hypologi. Nerat pebänaren. Nevad rekyrat byra. Apotris berat förutom mivan. Bylogi trirade alltså vina och känat.</p>
                        <p>Lörem ipsum krodyskade boligen om dyktigt. Hyn vedarade: pohess stenodoskade. Multit spegt. Osade hypologi. Nerat pebänaren. Nevad rekyrat byra. Apotris berat förutom mivan. Bylogi trirade alltså vina och känat.</p>
                        <div className='about-button'>
                            <button className='button-learn-more'>Learn More</button>
                            <button className='button-try'>Try Now</button>
                        </div>
                    </div>
                    <div className='about-desc-2'>
                        <p>Lörem ipsum krodyskade boligen om dyktigt. Hyn vedarade: pohess stenodoskade. Multit spegt. Osade hypologi. Nerat pebänaren. Nevad rekyrat byra. Apotris berat förutom mivan. Bylogi trirade alltså vina och känat.</p>
                        <div className='about-button'>
                            <button>Learn more</button>
                        </div>
                    </div>
                    <div className='img-decor2'>
                        <img src={aboutImg2} alt="Milk" />
                    </div>
                </div>
            </div>
        </section>
    )
}
