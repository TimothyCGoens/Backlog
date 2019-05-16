import React, {Component} from 'react'
import axios from 'axios'
import './Card.css'
import { connect } from 'react-redux';

class Card extends Component {

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

        // const cards = this.state.loadedCard.map((card) => {
        //     return <Card 
        //             key={card.guid}
        //             name={card.name}
        //             developers={card.developers}
        //             publishers={card.publishers}
        //             releaseDate={card.original_release_date}
        //             image={card.image.medium_url}
        //             genres={card.genres} />
        // })

        // if (this.props.card) {

    
            // console.log(game[0])
        
        
        let publishers = this.props.publishers.map((game) => {
            return (
                // console.log(game.name[0])
                <p>{game.name}</p>
            )
            // return <p>game.publishers.name</p>
        })
     
        let developers = this.props.developers.map((game) => {
            return (
                <p>{game.name}</p>
            )
        })
  

        // let post = <p>Please select a game!</p>
        // if (this.props.card) {
        //     post = <p>Loading!</p>
        // }
        // if(this.props.card) {
            let platforms = this.props.platforms.map((game) => {
                return (
                    <p>{game.name}</p>
                    
                )
            })
            return (
                <div key={this.props.card.id} className='entire-card'>
                {/* {cards} */}
                
                <div className='card-title'>
                    <p>{this.props.card.name}</p>
                </div>
                <div className='card-header'>
                    {this.props.image ? <img src = {this.props.image.medium_url} alt = ''/> : null}
                    <div className='header-info'>
                    <p className='header-styles'>{publishers}</p>
                    <p className='header-styles'>{developers}</p>
                    {platforms}
                    </div>
                    {/* <p>{this.props.card.original_release_date}</p> */}
                </div>
                <div className='deck'>
                    <p>{this.props.card.deck}</p>
                </div>
                <div className='resources'>
                    <p></p>
                </div>
                <ul className='card-buttons'>
                    <li><button onClick={this.handleBacklogClick}>Backlog</button></li>
                    <li><button onClick={this.handleWishlistClick}>Wishlist</button></li>
                    <li><button onClick={this.handleCurrentClick}>Current</button></li>
                </ul>
            </div>
            )
        }
    }

const mapStateToProps = (state) => {

    return {
        card: state.selectedGame,
        publishers: state.publishers,
        image: state.image,
        developers: state.developers,
        genres: state.genres,
        platforms: state.platforms
    }
}
// const mapDispatchToProps = (dispatch) => {
//     return ({
//         dispatchCard: (game) => {dispatch({type: 'CARD_LOADED', value: game})
//     }
//     })
    
// }

export default connect(mapStateToProps,null)(Card)