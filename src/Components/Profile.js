import React, {Component} from 'react'
import {Card} from './Card'
import './Profile.css'

export class Profile extends Component {
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
