'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var NavBar = require('./components/NavBar.jsx');
var Homepage = require('./components/Homepage.jsx');
var AboutUs = require('./components/AboutUs.jsx');

$(document).ready(function () {
    console.log('--------------------------document ready');
    ReactDOM.render(
        <NavBar />,
        document.getElementById('nav-bar-container')
    );

    switch (window.location.pathname) {
        case '/':
            ReactDOM.render(
                <Homepage />,
                document.getElementById('home')
            );
            break;
        case '/about-us':
            ReactDOM.render(
                <AboutUs />,
                document.getElementById('about-us')
            );
            break;
    }
});
