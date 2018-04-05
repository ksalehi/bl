'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar.jsx';
import Homepage from './components/Homepage.jsx';
import AboutUs from './components/AboutUs.jsx';

$(document).ready(function () {
    console.log('path: ', window.location.pathname);
    switch (window.location.pathname) {
        case '/':
            ReactDOM.render(
                <Homepage />,
                document.getElementById('nav-bar-container')
            );
            break;
        case '/about-us':
            ReactDOM.render(
                <AboutUs />,
                document.getElementById('nav-bar-container')
            );
            break;
        default:
            console.log('Page Not Found');
            break;
    }

    $('.carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots: false,
        autoplay: false,
        autoplaySpeed: 3000,
    });

});
