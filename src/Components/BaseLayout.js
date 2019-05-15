import React, {Component} from 'react'
import {Link, NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import './BaseLayout.css' 

class Menu extends Component {

    handleLogOutClick = () => {
        localStorage.removeItem('jsonwebtoken')
        this.props.logout()
        this.props.history.push('/login')
    }
    
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
                {this.props.isAuthenticated ? <li><a onClick={this.handleLogOutClick} href='#'><button>Log Out</button></a></li> : null}
            </ul>
            </div>
            </div>
        )
    }

}

class BaseLayout extends Component {
    render() {
        return(
            <div>
                <Menu isAuthenticated={this.props.isAuthenticated} logout={this.props.onLogout} history={this.props.history}/>
                {this.props.children}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.isAuthenticated
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => dispatch({type: 'LOGOUT'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BaseLayout))