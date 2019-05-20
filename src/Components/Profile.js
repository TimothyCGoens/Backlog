import React, {Component} from 'react'
import {connect} from 'react-redux'
import Card from './Card'
import './Profile.css'
import Axios from 'axios';

class Profile extends Component {

    constructor() {
        super()
        this.state = {
            users: []
        }
    }


    componentDidMount() {
        Axios.get(`https://thebacklogapp.herokuapp.com/profile/${this.props.user}`)
        .then(response => {
            this.setState({users: response.data})
            console.log(response.data)
        })
    }

    render() {

        return(
            <div className='profile'>
            <h1>Your Profile</h1>
            <div className='profile-layout'>
            <div className='currently-playing'>
            {/* <Card /> */}
            </div>
            <div className='user-info'>
            
            <div className='profile-info'>
            <p>Username</p>
            <div className='info-name'>{this.state.users.username}</div>
            </div>
            <div className='profile-info'>
            <p>Location</p>
            <div className='info-name'>{this.state.users.location}</div>
            </div>
            <div className='profile-info'>
            <p>Platform of choice</p>
            <div className='info-name'>{this.state.users.platform}</div>
            </div>
            <div className='profile-info'>
            <p>Favorite Genre</p>
            <div className='info-name'>{this.state.users.genre}</div>
            </div>
            <div className='profile-info'>
            <p>About Me</p>
            <div className='info-name'>{this.state.users.aboutme}</div>
            </div>
            </div>
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        user: state.uid
    }
}

export default connect(mapStateToProps)(Profile)