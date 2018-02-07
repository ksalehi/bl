'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar.jsx';
import $ from 'jquery';

$(document).ready(function () {
    ReactDOM.render(
        <NavBar />,
        document.getElementById('nav-bar-container')
    );
});
