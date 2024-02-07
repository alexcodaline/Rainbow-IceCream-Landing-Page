import React from 'react'
import wrapper from './../../../img/header/wrapper-img2.webp'
import decoration from './../../../img/decoration/title-decor.webp'
import './Title.scss'

export default function Title() {
    return (
        <section className='title'>
            <div className='container'>
                <div className='title-wrapper'>
                    <div className='title-content'>
                        <h1>Grab The Best Ice Cream</h1>
                        <p>Lörem ipsum krodyskade boligen om dyktigt. Hyn vedarade: pohess stenodoskade. Multit spegt. Osade hypologi. Nerat pebänaren. Nevad rekyrat byra. Apotris berat förutom mivan. Bylogi trirade alltså vina och känat.
                        </p>
                        <button>Learn More</button>
                    </div>
                    <div className='title-img'>
                        <img src={wrapper} alt="IceCream" />
                    </div>
                </div>
            </div>
            <div className='title-decor'>
                <img src={decoration} alt="IceCream" />
            </div>
        </section>
    )
}
