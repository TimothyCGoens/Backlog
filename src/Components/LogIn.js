import React, {Component} from 'react'
import './LogIn.css'

export class Login extends Component {

    constructor() {
        super()

        this.state = {
            email: '',
            password: ''
        }
    }

    handleTextChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleLogInClick = () => {
        console.log("clicked")
    }



    render() {
        return(
            <div className='Login'>
                <h1>Log In</h1>
                <input onChange={this.handleTextChange} name='email' type='email' placeholder='email address' />
                <input onChange={this.handleTextChange} name='password' type='password' placeholder='password' />
                <button onClick={this.handleLogInClick}>Log In</button>
            </div>
        )
    }
}