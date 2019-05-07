import React, {Component} from 'react'
import './Register.css'

// const OPTIONS = ['PS4', 'XBOX']

export class Register extends Component {

    // createCheckbox = option => (
    //     <Checkbox
    //     label={option}
    //     isSelected={this.state.checkboxes[option]}
    //     onCheckboxChange={this.handleCheckboxChange}
    //     key={option}
    //     />
    // )

    // createCheckboxes = () => { OPTIONS.map(this.createCheckbox)}

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
        console.log("clicked")
    }


    render() {
        return(
            <div className='register'>
            <h1>Register</h1>
            <input onChange={this.handleTextChange} name='username' type='text' placeholder='username' />
            <input onChange={this.handleTextChange} name='location' type='text' placeholder='location' />
            <input onChange={this.handleTextChange} name='platform' type='text' placeholder='platform of choice' />
            <input onChange={this.handleTextChange} name='genre' type='text' placeholder='favorite genre' />
            <textarea onChange={this.handleTextChange} name='aboutMe' placeholder='about me' />
            <input onChange={this.handleTextChange} name='email' type='email' placeholder='email' />
            <input onChange={this.handleTextChange} name='password' type='password' placeholder='password' />
            <h4>Check for each platform you play on</h4>
            <button onClick={this.handleRegisterClick}>Register</button>

            </div>

        )
    }
}