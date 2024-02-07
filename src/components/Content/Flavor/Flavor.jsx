import React, { useState } from 'react';
import IconIce from '../../../img/decoration/decoration-flavor.svg';
import containerIceCream from "../../../img/products/ice-cream-container.webp";
import vanila from '../../../img/products/vanila.webp';
import blueberry from '../../../img/products/blueberry.webp';
import chocolate from '../../../img/products/chocolate.webp';
import strawberry from '../../../img/products/strawberry.webp';
import pistachio from '../../../img/products/pistachio.webp';
import mango from '../../../img/products/mango.webp';

import './Flavor.scss';

const flavors = [
    { name: '', image: null, style: { top: '-3vh', left: '4vw', width: '22vw', height: '10vh' } },
    { name: 'vanila', image: vanila, style: { top: '-3vh', left: '4vw', width: '22vw', height: '10vh' } },
    { name: 'blueberry', image: blueberry, style: { top: '-13vh', left: '-6.8vw', width: '50vw', height: '10vh' } },
    { name: 'chocolate', image: chocolate, style: { top: '-6vh', left: '4vw', width: '22vw', height: '10vh' } },
    { name: 'strawberry', image: strawberry, style: { top: '-7vh', left: '2.5vw', width: '24vw', height: '10vh' } },
    { name: 'pistachio', image: pistachio, style: { top: '-7vh', left: '2.5vw', width: '24vw', height: '10vh' } },
    { name: 'mango', image: mango, style: { top: '-4.5vh', left: '4vw', width: '22.5vw', height: '10vh' } },
];

export default function Flavor() {
    const [selectedFlavor, setSelectedFlavor] = useState(flavors[0]);

    const handleButtonClick = (flavor) => {
        setSelectedFlavor(flavor);
    };

    return (
        <section className='flavor'>
            <div className='container'>
                <div className='container-flavor'>
                    <div className='flavor-btn-row'>
                        <div className='btns-flavor'>
                            {flavors.map((flavor) => (
                                <button
                                    key={flavor.name}
                                    onClick={() => handleButtonClick(flavor)}
                                    className={flavor.name}
                                >
                                    {flavor.name}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className='flavor-container'>
                        <div className='flavor-container-ice'>
                            <div className='ice-cream-large'><img src={containerIceCream} alt="IceCream" style={{ height: '55vh', width: '70vw' }} /></div>
                            {flavors.map((flavor) => (
                                <div
                                    key={flavor.name}
                                    className={`ice-cream-flavor-${flavor.name}`}
                                    style={{
                                        visibility: selectedFlavor && selectedFlavor.name !== flavor.name ? 'visible' : 'hidden',
                                    }}
                                >
                                    <img src={flavor.image} alt={flavor.name}
                                        onClick={() => handleButtonClick(flavor)}
                                    />
                                </div>
                            ))}
                            {selectedFlavor && (
                                <div
                                    className={`ice-cream-flavor-${selectedFlavor.name}`}
                                    style={{
                                        top: selectedFlavor.style.top,
                                        left: selectedFlavor.style.left,
                                        width: selectedFlavor.style.width,
                                        height: selectedFlavor.style.height
                                    }}
                                >
                                    <img src={selectedFlavor.image} alt={selectedFlavor.name} />
                                </div>
                            )}
                        </div>

                        <div className='flavor-desc'>
                            <h3>Heavenly Flavors</h3>
                            <div className='flavor-image'><img src={IconIce} style={{ width: '88px', height: '125px' }} alt="IceCream" /></div>
                            <span>Lörem ipsum krodyskade boligen om dyktigt. Hyn vedarade: pohess stenodoskade. Multit spegt. Osade hypologi. Nerat pebänaren. Nevad rekyrat byra.</span>

                            <div className='about-button'>
                                <button className='button-learn-more'>Learn More</button>
                                <button className='button-try'>Try Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}