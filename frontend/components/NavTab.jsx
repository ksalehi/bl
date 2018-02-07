import React from 'react';

class NavTab extends React.PureComponent {
    render() {
        return (
            <li
                onClick={this.props.onClick}
                className={this.props.isActive ? 'active' : ''}>
                {this.props.title}
            </li>
        );
    }
}

export default NavTab;
