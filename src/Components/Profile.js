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
        Axios.get(`http://localhost:8080/profile/${this.props.user}`)
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
            <div className='currently-playing'>Currently Playing
            {/* <Card /> */}
            </div>
            <div className='user-info'>
            
            <div><p>{this.state.users.username}</p></div>
            <div><p>{this.state.users.location}</p></div>
            <div><p>{this.state.users.platform}</p></div>
            <div><p>{this.state.users.genre}</p></div>
            <div><p>{this.state.users.aboutme}</p></div>
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