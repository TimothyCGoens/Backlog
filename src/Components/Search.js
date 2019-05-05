import React, {Component} from 'react'
import './Search.css'

export class Search extends Component {
    render() {
        return(
            <div className='search'>
                <h1>Search for Game</h1>
                <input type='text' placeholder='Game Title' />
                <button>Search</button>
            </div>
        )
    }
}