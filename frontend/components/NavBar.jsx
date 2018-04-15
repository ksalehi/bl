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
                title: 'HOME',
                link: '/'
            },
            {
                title: 'BioLogy: BL in Nature',
                link: '/bl-in-nature'
            },
            {
                title: 'Why BL for your Research?',
                options: [
                    {
                        title: 'Workshops',
                        link: '/workshops'
                    },
                    {
                        title: 'Emissaries',
                        link: '/emissaries'
                    }
                ]
            },
            {
                title: 'Learn How: We Will Help',
                link: '/learn-bl'
            },
            {
                title: 'About our Hub',
                link: '/about-us'
            },
            {
                title: 'Symposium',
                link: '/symposium'
            },
            {
                title: 'MBL Practicum',
                link: '/mbl'
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
