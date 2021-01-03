import React, { Component } from 'react';
import MenuItem from './MenuItem';

class Menu extends Component {
    constructor() {
        super();
        this.state = {
            menu: []
        }
    }

    componentDidMount() {
        fetch('/api/menu/nav')
            .then(res => res.json())
            .then(menu => this.setState({menu}, () => console.log('Menu fetched', menu)));
    }

    render() {
        return this.state.menu.map(item =>
            <MenuItem item={item} />
        );
    }
}

export default Menu;
