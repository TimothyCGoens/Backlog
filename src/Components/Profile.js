import React, {Component} from 'react'
import {connect} from 'react-redux'
import Card from './Card'
import './Profile.css'
import Axios from 'axios';

export class Profile extends Component {

    constructor() {
        super()
        this.state = {
            user: []
        }
    }

    componentDidMount() {
        Axios.get('http://localhost8080/profile')
        .then(response => {
            this.setState({user: response.data})
        })
    }

    

    render() {
        return(
            <div className='profile'>
            <h1>Your Profile</h1>
            <div className='profile-layout'>
            <div className='currently-playing'>Currently Playing
            <Card /></div>
            <div className='user-info'>
            <div><p>Username</p></div>
            <div><p>Location</p></div>
            <div><p>Primary Platform</p></div>
            <div><p>Favorite Genre</p></div>
            <div><p>About Me</p></div>
            </div>
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.uid
    }
}

export default connect(mapStateToProps)(Profile)