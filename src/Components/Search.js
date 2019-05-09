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
        let url = `http://www.giantbomb.com/api/search/?api_key=f194765e78f8558180a48f79cbb6b02fe6f9bca2&format=json&query="${this.state.title}"&resources=game`
        
        fetch(url)
        .then(response => response.json())
        .then(json => {
            this.setState({
                games: json
            })
        })
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