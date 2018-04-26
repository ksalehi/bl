import React from 'react';
import NavTab from './NavTab.jsx';
import Homepage from './Homepage.jsx';
import AboutUs from './AboutUs.jsx';
import NavTabDropdown from './NavTabDropdown.jsx';

class NavBar extends React.PureComponent {
    constructor(props) {
        super(props);
         this.tabs = [
            {
                title: 'Home',
                link: '/'
            },
            {
                title: 'BL in Nature',
                link: '/bl-in-nature'
            },
            {
                title: 'Why Use BL?',
                options: [
                    {
                        title: 'Workshops',
                        link: '/research/workshops'
                    },
                    {
                        title: 'Emissaries',
                        link: '/research/emissaries'
                    }
                ]
            },
            {
                title: 'Learn How',
                link: '/learn'
            },
            {
                title: 'About Our Hub',
                link: '/about-us'
            },
            {
                title: 'Symposium',
                options: [
                    {
                        title: 'Schedule',
                        link: '/symposium/schedule'
                    },
                    {
                        title: 'Register',
                        link: '/symposium/register'
                    },
                    {
                        title: 'Poster Guidelines',
                        link: '/symposium/poster-guidlines'
                    },
                ]
            },
            {
                title: 'MBL Practicum',
                options: [
                    {
                        title: 'About',
                        link: '/mbl/about'
                    },
                    {
                        title: '2018 Practicum',
                        link: '/mbl/2018-practicum'
                    },
                    {
                        title: 'Apply',
                        link: '/mbl/apply'
                    },
                ]
            },
            {
                title: 'Curricula',
                link: '/curricula'
            }
        ];

        this.renderTabs = this.renderTabs.bind(this);
    }

    renderTabs(tabs) {
        return tabs.map((tab, idx) => {
            if (tab.options) {
                return (
                    <NavTabDropdown
                        key={idx}
                        title={tab.title}
                        options={tab.options}
                    />
                );
            } else {
                return (
                    <NavTab
                        key={idx}
                        title={tab.title}
                        isActive={tab.link == window.location.pathname}
                        link={tab.link}
                    />
                );
            }
        });
    }

    render() {
         return (
             <div>
                <ul className='bl-nav-bar clearfix'>
                    {this.renderTabs(this.tabs)}
                </ul>
            </div>
        );
    }
}

export default NavBar;
