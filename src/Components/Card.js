import React, {Component} from 'react'
import axios from 'axios'
import './Card.css'
import { connect } from 'react-redux';
import {addGameToBacklog} from '../store/actions'
import * as actionCreators from '../store/actions'

class Card extends Component {

    handleBacklogClick = () => {
        this.props.dispatchToBacklog(this.props)
    }

    handleWishlistClick = () => {
        console.log('clicked')
    }
    handleCurrentClick = () => {
        console.log('clicked')
    }

    render() {

        // let releaseDate = this.props.releaseDate;
        // console.log(releaseDate)
        // let dateStr = JSON.parse(release_date);
        // console.log(dateStr);

        // let date = new Date(dateStr)
        // console.log(date)

        let publishers = this.props.publishers.map((game) => {
            return (
                <p>{game.name}</p>
            )
        })
     
        let developers = this.props.developers.map((game) => {
            return (
                <p>{game.name}</p>
            )
        })
        let genres = this.props.genres.map((game) => {
            return (
                <p>{game.name}</p>
            )
        })
        let platforms = this.props.platforms.map((game) => {
            return (
                <p>{game.name}</p>
            )
        })

        if (this.props.gameSelected === false) {
            return (
                <div></div>
            )
        }
        else {
            return (
                <div key={this.props.card.id} className='entire-card'>
                {/* {cards} */}
                
                <div className='card-title'>
                    <p>{this.props.card.name}</p>
                </div>
                <div className='card-header'>
                    <div className='image-spot'>
                        {this.props.image ? <img src = {this.props.image.medium_url} alt = ''/> : null}
                    </div>
                    <div className='header-info'>
                    <p className='bold'>Publisher(s)</p>
                    <p className='header-styles'>{publishers}</p>
                    <p className='bold'>Developer(s)</p>
                    <p className='header-styles'>{developers}</p>
                    <p className='bold'>Genre</p>
                    <p className='header-styles'>{genres}</p>
                    
                
                    </div>
                    {/* <p>{this.props.card.original_release_date}</p> */}
                </div>
                <div className='deck'>
                <div className='platform-spacing'>
                <p className='bold'>Platform(s)</p>
                <p className='platform-styles'>{platforms}</p>
                </div>
                    <p className='deck-style'>{this.props.card.deck}</p>
                </div>
                <div className='resources'>
                    <p></p>
                </div>
                <ul className='card-buttons'>
                    <li><button className='card-backlog-button' onClick={this.handleBacklogClick}>Add to Backlog</button></li>
                </ul>
                </div>
            )
        }
        
    }
}


const mapStateToProps = (state) => {

    return {
        gameSelected: state.gameSelected,
        name: state.name,
        deck: state.deck,
        card: state.selectedGame,
        publishers: state.publishers,
        image: state.image,
        developers: state.developers,
        genres: state.genres,
        platforms: state.platforms,
        releaseDate: state.releaseDate,
        userId: state.uid
    }
}
const mapDispatchToProps = (dispatch) => {
    return ({
        dispatchToBacklog: (card) => {dispatch(actionCreators.addGameToBacklog(card)
        )}
    
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(Card)