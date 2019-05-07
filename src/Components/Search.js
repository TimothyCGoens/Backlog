import React, {Component} from 'react'
import './Search.css'

export class Search extends Component {

    constructor() {
        super()

        this.state = {
            title: ''
        }
    }

    handleTextChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSearchClick = () => {
        console.log('clicked')
    }



    render() {
        return(
            <div className='search'>
                <h1>Search for Game</h1>
                <input onChange={this.handleTextChange} name='title' type='text' placeholder='Game Title' />
                <button onClick={this.handleSearchClick}>Search</button>
            </div>
        )
    }
}