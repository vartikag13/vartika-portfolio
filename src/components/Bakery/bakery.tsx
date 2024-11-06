import React, { useState } from 'react';
import Bread from '../../assets/images/bread.jpeg';
import Loaves from '../../assets/images/loaves.jpg';
import TheCP from '../../assets/images/the_crooked_pan.jpeg';
import './bakery.scss';

const Bakery: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [TheCP, Loaves, Bread];

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="container bakery-container">
            <div className="bakery-text-zone">
                <h1 className="bakery-name">The Crooked Pan</h1>
                <h2>
                    My love for baking started while searching for a new hobby.
                    After many half-cooked breads baked in my crooked pan, I
                    finally perfected this art. Or so I think - you be the
                    judge!
                </h2>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/the_crooked_pan/?igsh=MXZza213ZnExaGtkYg%3D%3D&utm_source=qr"
                    className="flat-button"
                >
                    ORDER HERE
                </a>
            </div>
            <div className="carousel-zone">
                <button onClick={prevSlide} className="carousel-button prev">
                    ❮
                </button>
                <div className="carousel-item">
                    <img
                        src={images[currentIndex]}
                        alt={`Slide ${currentIndex + 1}`}
                    />
                </div>
                <button onClick={nextSlide} className="carousel-button next">
                    ❯
                </button>
            </div>
        </div>
    );
};

export default Bakery;
