import React, { Component } from 'react';
import { Menu } from './styles';

export default class Navbar extends Component {
    render() {
        return (
            <>
                <Menu>
                    <li><a href="/">Início</a></li>
                    <li><a href="/repository">Repos salvos</a></li>
                </Menu>
            </>
        )
    }
}