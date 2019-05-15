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
        
        
        let publisher = this.props.publishers.map((game) => {
            return (
                <p>{game.name}</p>
            )
            // return <p>game.publishers.name</p>
        })
        let image = this.props.image.map((game) => {
            console.log(game)
            return (
                <img src={game.medium_url}/>
            )
        })


        // let post = <p>Please select a game!</p>
        // if (this.props.card) {
        //     post = <p>Loading!</p>
        // }
        // if(this.props.card) {
            return (
                <div key={this.props.card.id} className='entire-card'>
                {/* {cards} */}
                <div className='card-header'>
                <div className='card-title'>
                    <p>{this.props.card.name}</p>
                    <p>{this.props.card.deck}</p>
                    {/* <img src={this.props.card.image.medium_url} alt='box art' /> */}
                    {publisher}
                    {image}
                </div>
                </div>
                <div className='card-body'>
                    {/* <p>{this.state.loadedCard.genres}</p> */}
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
    }

const mapStateToProps = (state) => {
    console.log(state)
    return {
        card: state.selectedGame,
        publishers: state.publishers,
        image: state.image
    }
}

export default connect(mapStateToProps,null)(Card)