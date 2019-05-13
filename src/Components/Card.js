import React, {Component} from 'react'
import axios from 'axios'
import './Card.css'

export class Card extends Component {

    constructor() {
        super()
            this.state = {
                loadedPost: null
            }
    }
    componentDidUpdate () {
        if (this.props.id) {
            if(!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)) {
                axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
                .then(response => {
                    this.setState({loadedPost: response.data})
                })
            }

        } 
    }

    handleBacklogClick = () => {
        console.log('clicked')
    }

    handleWishlistClick = () => {
        console.log('clicked')
    }
    handleCurrentClick = () => {
        console.log('clicked')
    }

    render() {
        let post = <p>Please select a game!</p>
        if (this.props.id) {
            post = <p>Loading!</p>
        }
        if(this.state.loadedPost) {
            
            post = (
                <div className='entire-card'>
                <div className='card-header'>
                <div className='card-title'>
                    <p>{this.state.loadedPost.title}</p>
                    <p>Random</p>
                    <p>Random</p>
                </div>
                </div>
                <div className='card-body'>
                    <p>Release Date:</p>
                    <p>Website:</p>
                    <p>Description:</p>
                    <p>Reviews:</p>
                    <p>Quick Look:</p>
                </div>
                <ul className='card-buttons'>
                    <li><button onClick={this.handleBacklogClick}>Backlog</button></li>
                    <li><button onClick={this.handleWishlistClick}>Wishlist</button></li>
                    <li><button onClick={this.handleCurrentClick}>Current</button></li>
                </ul>
            </div>
            )
          

        }
        return(
            post
        )
    }
}
    
