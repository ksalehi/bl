import React from 'react';

class NavTab extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        let className = 'bl-nav-tab';
        if (this.props.isActive) {
            className += ' active';
        }
        
        return (
            <a href={this.props.link}>
                <li className={className}>
                    {this.props.title}
                </li>
            </a>
        );
    }
}

export default NavTab;
