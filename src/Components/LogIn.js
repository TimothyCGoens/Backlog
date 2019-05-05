import React, {Component} from 'react'
import './LogIn.css'

export class Login extends Component {
    render() {
        return(
            <div className='Login'>
                <h1>Log In</h1>
                <input type='email' placeholder='email address' />
                <input type='password' placeholder='password' />
                <button>Submit</button>
            </div>
        )
    }
}