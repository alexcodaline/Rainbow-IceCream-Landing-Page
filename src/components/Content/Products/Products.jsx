import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';


import './Products.scss';

const productsData = [
    {
        id: "1",
        img: require('../../../img/products/product1.webp'),
        name: "Cones",
        icon: require('../../../img/products/icon1.png'),
        desc: "Lörem ipsum krodyskade boligen om dyktigt. Hyn vedarade: pohess stenodoskade. Multit spegt.",
    },
    {
        id: "2",
        img: require('../../../img/products/product2.webp'),
        name: "Juices",
        icon: require('../../../img/products/icon2.png'),
        desc: "Lörem ipsum krodyskade boligen om dyktigt. Hyn vedarade: pohess stenodoskade. Multit spegt.",
    },
    {
        id: "3",
        img: require('../../../img/products/product3.webp'),
        name: "Ice Creams",
        icon: require('../../../img/products/icon3.png'),
        desc: "Lörem ipsum krodyskade boligen om dyktigt. Hyn vedarade: pohess stenodoskade. Multit spegt.",
    }
];

export default function Products() {
    const isMobile = window.innerWidth <= 767;

    return (
        <section className='products'>
            <div className='container'>
                <div className='products-container'>
                    <h2>Products Range</h2>
                    {isMobile ? (
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={1}
                            centeredSlides={false}
                            className='product-swiper'
                            style={{
                                '--swiper-navigation-color': '#d54848',
                                '--swiper-pagination-color': '#d54848',
                                '--swiper-pagination-bullet-size': '20px',
                                '--swiper-pagination-bullet-width': '20px',
                            }}
                            navigation={true}
                            pagination={{ clickable: true }}
                            modules={[Pagination, Navigation]}
                        >
                            {productsData.map((product) => (
                                <SwiperSlide key={product.id}>
                                    <div className='products-item'>
                                        <img className='items-img' src={product.img} alt={product.name} />
                                        <h3>{product.name}</h3>
                                        <img className='items-icon' src={product.icon} alt={product.name} />
                                        <span>{product.desc}</span>
                                        <a href="/" className='product-link'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="74" height="74" viewBox="0 0 74 74" fill="none">
                                                <circle cx="37" cy="37" r="36" fill="#FECDDC" stroke="black" strokeWidth="2" />
                                                <path d="M52.5785 38.0425C53.1543 37.4469 53.1382 36.4973 52.5425 35.9215L42.8362 26.5387C42.2406 25.9629 41.2909 25.979 40.7152 26.5747C40.1394 27.1703 40.1555 28.1199 40.7511 28.6957L49.379 37.0359L41.0387 45.6638C40.4629 46.2594 40.479 47.2091 41.0747 47.7848C41.6703 48.3606 42.6199 48.3445 43.1957 47.7489L52.5785 38.0425ZM22.0254 38.9998L51.5254 38.4998L51.4746 35.5002L21.9746 36.0002L22.0254 38.9998Z" fill="black" />
                                            </svg>
                                        </a>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ) : (
                        <div className='products-items'>
                            {productsData.map((product) => (
                                <div className='products-item' key={product.id}>
                                    <img className='items-img' src={product.img} alt={product.name} />
                                    <h3>{product.name}</h3>
                                    <img className='items-icon' src={product.icon} alt={product.name} />
                                    <span>{product.desc}</span>
                                    <a href="/" className='product-link'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="74" height="74" viewBox="0 0 74 74" fill="none">
                                            <circle cx="37" cy="37" r="36" fill="#FECDDC" stroke="black" strokeWidth="2" />
                                            <path d="M52.5785 38.0425C53.1543 37.4469 53.1382 36.4973 52.5425 35.9215L42.8362 26.5387C42.2406 25.9629 41.2909 25.979 40.7152 26.5747C40.1394 27.1703 40.1555 28.1199 40.7511 28.6957L49.379 37.0359L41.0387 45.6638C40.4629 46.2594 40.479 47.2091 41.0747 47.7848C41.6703 48.3606 42.6199 48.3445 43.1957 47.7489L52.5785 38.0425ZM22.0254 38.9998L51.5254 38.4998L51.4746 35.5002L21.9746 36.0002L22.0254 38.9998Z" fill="black" />
                                        </svg>
                                    </a>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section >
    );
}