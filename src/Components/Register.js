import React, {Component} from 'react'
import './Register.css'

export class Register extends Component {
    render() {
        return(
            <div className='register'>
            <h1>Register</h1>
            <input type='text' placeholder='username' />
            <input type='text' placeholder='location' />
            <input type='text' placeholder='fave console' />
            <input type='email' placeholder='email' />
            <input type='password' placeholder='password' />
            <button>Register</button>

            </div>

        )
    }
}