import React from 'react';
import NavBar from './NavBar.jsx';

const Homepage = (props) => {
    return (
        <div className="carousel">
            <div className='hero-img-container'>
                <img className='hero-img'
                    src='assets/jellyfish.jpg'
                    data-pin-no-pin={true}
                />
            </div>
            <div className="hero-img-container">
                <img className='hero-img'
                    src='assets/jellyfish2.jpg'
                    data-pin-no-pin={true}
                />
            </div>
            <div className="hero-img-container">
                <img className='hero-img'
                    src='assets/jellyfish3.jpg'
                    data-pin-no-pin={true}
                />
            </div>
        </div>
    );
};

export default Homepage;
