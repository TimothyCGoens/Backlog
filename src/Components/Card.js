import React, {Component} from 'react'
import './Card.css'

export class Card extends Component {
    render() {
        return(
            <div className='entire-card'>
                <div className='card-header'>
                <img src='https://images.g2a.com/newlayout/323x433/1x1x0/26c128e4cba2/5cc00ab8ae653a6010535245'/>
                <div className='card-title'>
                    <p>Game Title</p>
                    <p>Genre</p>
                    <p>Developer</p>
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
                    <li><button>Add to Backlog</button></li>
                    <li><button>Add to Wishlist</button></li>
                    <li><button>Add to Current</button></li>
                </ul>
            </div>
            
        )
    }
}