import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import './Register.css'


class Register extends Component {
 constructor() {
     super()

     this.state = {
         username: '',
         location: '',
         platform: '',
         genre: '',
         aboutMe: '',
         email: '',
         password: ''
     }
 }
    handleTextChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleRegisterClick = () => {
        const user = {
            username: this.state.username,
            location: this.state.location,
            platform: this.state.platform,
            genre: this.state.genre,
            aboutme: this.state.aboutme,
            email: this.state.email,
            password: this.state.password
        }
        axios.post('https://thebacklogapp.herokuapp.com/register', user)
            .then(response => {
                console.log(response)
        })
        // console.log("clicked")
    }


    render() {
        return(
            <div className='register'>
            <h1>Register</h1>
            <div className='register-inputs'>
            <input className='inputs' onChange={this.handleTextChange} name='username' type='text' placeholder='username' />
            <input className='inputs' onChange={this.handleTextChange} name='location' type='text' placeholder='location' />
            <input className='inputs' onChange={this.handleTextChange} name='platform' type='text' placeholder='platform of choice' />
            <input className='inputs' onChange={this.handleTextChange} name='genre' type='text' placeholder='favorite genre' />
            <textarea className='text-area-input' onChange={this.handleTextChange} name='aboutme' placeholder='about me' />
            <input className='inputs' onChange={this.handleTextChange} name='email' type='email' placeholder='email' />
            <input className='inputs' onChange={this.handleTextChange} name='password' type='password' placeholder='password' />
            </div>
            <button onClick={this.handleRegisterClick}>Register</button>

            </div>

        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onAuthenticated: (token) => dispatch({type: 'ON_AUTHENTICATED', token: token})
    }
}

export default connect(null, mapDispatchToProps)(Register)