import React, {Component} from 'react'
import {Plate} from './Plate'
import {Card} from './Card'
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
                <h1>Search for Games</h1>
                <input onChange={this.handleTextChange} name='title' type='text' placeholder='Game Title' />
                <button onClick={this.handleSearchClick}>Search</button>
                    <div className='search-layout'>
                        <div className='search-highlight'>
                            <Card />
                        </div>
                        <div className='search-results'>
                            <Plate />
                        </div>
                    </div>
            </div>
        )
    }
}