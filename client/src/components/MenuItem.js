import React, { Component } from 'react';

class MenuItem extends Component {
    render() {
        return (
            <button>{ this.props.item.name }</button>
        );
    }
}

export default MenuItem;
