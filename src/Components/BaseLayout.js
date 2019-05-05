import React, {Component} from 'react'
import {Link, NavLink} from 'react-router-dom'
import './BaseLayout.css' 

export class Menu extends Component {
    render() {
        return(
            <div className='menu'>
            <h1>Backlog</h1>
            <div>
            <ul className='menu-items'>
                <li><NavLink className='link' to='/register'>Register</NavLink></li>
                <li><NavLink className='link' to='/login'>Log In</NavLink></li>
                <li><NavLink className='link' to='/profile'>Profile</NavLink></li>
                <li><NavLink className='link' to='/search'>Search</NavLink></li>
                <li><NavLink className='link' to='/backlog'>Backlog</NavLink></li>
            </ul>
            </div>
            </div>
        )
    }

}

export class BaseLayout extends Component {
    render() {
        return(
            <div>
                <Menu />
                {this.props.children}
            </div>
        )
    }
}