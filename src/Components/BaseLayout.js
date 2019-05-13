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
                <li><Link to='/register'><button>Register</button></Link></li>
                <li><Link to='/login'><button>Log In</button></Link></li>
                <li><Link to='/profile'><button>Profile</button></Link></li>
                <li><Link to='/search'><button>Search</button></Link></li>
                <li><Link to='/backlog'><button>Backlog</button></Link></li>
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