import React, {Component} from 'react'
import axios from 'axios'
import {setAuthenticationHeader} from '../utilities/authenticate'
import {connect} from 'react-redux'
import './LogIn.css'

class Login extends Component {

    constructor() {
        super()

        this.state = {
            username: '',
            password: ''
        }
    }

    handleTextChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleLogInClick = () => {
        
        axios.post(`${'https://cors-anywhere.herokuapp.com/'}https://thebacklogapp.herokuapp.com/login`,{
            username: this.state.username,
            password: this.state.password
        }).then(response => {
            let token = response.data.token
            let userID = response.data.id 
            localStorage.setItem('jsonwebtoken', token)
            this.props.onAuthenticated(token, userID)
            setAuthenticationHeader(token)
            this.props.history.push('/search')
        }).catch(err => console.log(err))
    }



    render() {
        return(
            <div className='Login'>
                <h1>Log In</h1>
                <input className='inputs' onChange={this.handleTextChange} name='username' type='text' placeholder='username' />
                <input className='inputs' onChange={this.handleTextChange} name='password' type='password' placeholder='password' />
                <button onClick={this.handleLogInClick}>Log In</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAuthenticated: (token, userID) => dispatch({type: 'ON_AUTHENTICATED', token: token, uid:userID})
    }
    
}

export default connect(null, mapDispatchToProps)(Login)

