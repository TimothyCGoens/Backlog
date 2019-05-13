import React, {Component} from 'react'
import axios from 'axios'
import './LogIn.css'

export class Login extends Component {

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
        
        axios.post('http://localhost:8080/login',{
            username: this.state.username,
            password: this.state.password
        }).then(response => {
            
        }).catch(error => console.log(error))
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