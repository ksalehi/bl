import React from 'react';
import NavTab from './NavTab.jsx';

class NavBar extends React.PureComponent {
    constructor(props) {
        super(props);
         this.tabs = [
            'HOME',
            'ABOUT US',
            'WORKSHOPS',
            'HISTORY OF BIOLUMINESCENCE',
            'VERICAL OPEN SCIENCE',
            'CONTACT US'
        ];

        this.handleClick = this.handleClick.bind(this);
        this.renderTabs = this.renderTabs.bind(this);

        this.state = {
            currentTab: 0
        };
    }

    renderTabs() {
        return this.tabs.map( (title, idx) => {
            return (
                <NavTab
                    key={idx}
                    title={title}
                    isActive={idx === this.state.currentTab}
                    onClick={this.handleClick.bind(this, idx)}
                    />
            );
        });
    }

    handleClick(idx) {
        this.setState({
            currentTab: idx
        });
    }

    render() {
         return (
            <ul className='nav-bar clearfix'>
                {this.renderTabs()}
            </ul>
        );
    }
}

export default NavBar;
