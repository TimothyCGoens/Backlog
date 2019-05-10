import React, {Component} from 'react'
import {Plate} from './Plate'
import {Card} from './Card'
import './Search.css'

export class Search extends Component {

    constructor() {
        super()

        this.state = {
            games: [],
            title: ''
        }
    }

    componentDidMount() {
        
      
    }

    handleTextChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

       
    }

    handleSearchClick = () => {

        fetch('http://localhost:8080/send-search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Accept": 'application/json'
            },
            body: JSON.stringify(this.state.title)
        })
        .then(response => response.json())

        // fetch('/search').then(function(response) {
        //     console.log(response.json())
        //     return response.json()
        // }).then(function(json) {
        //     this.setState({
        //         games: this.state.games.concat(json)
        //     })
        // })
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
                            <Plate games={this.state.games}/>
                        </div>
                    </div>
            </div>
        )
    }
}