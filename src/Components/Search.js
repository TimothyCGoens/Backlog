import React, {Component} from 'react'
import Plate from './Plate'
import {Card} from './Card'
import axios from 'axios'
import Pagination from 'react-js-pagination'
import './Search.css'

export class Search extends Component {

    constructor(props) {
        super(props)

        this.state = {
            activePage: 1,
            selectedPostId: null,
            posts: [],
            games: [],
            title: ''
        }
    }
    handlePageChange(pageNumber) {
        this.setState({activePage: pageNumber})
    }

    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/posts')
        .then(response => {
            this.setState({posts: response.data})
            //console.log(response)
        })
    }

    handleTextChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    // clicking a plate will populate the sidebar with info
    handlePlateSelected = (id) =>{
        this.setState({selectedPostId: id})
    }
    // handleSearchClick = () => {

    //     fetch('http://localhost:8080/send-search', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             "Accept": 'application/json'
    //         },
    //         body: JSON.stringify(this.state.title)
    //     })
    //     .then(response => response.json())

        // fetch('/search').then(function(response) {
        //     console.log(response.json())
        //     return response.json()
        // }).then(function(json) {
        //     this.setState({
        //         games: this.state.games.concat(json)
        //     })
        // })
    //}



    render() {

        const posts = this.state.posts.map((post) => {
            return <Plate 
                    key={post.id} 
                    name={post.title} 
                    // street={post.address.street} 
                    // city={post.address.city}
                    clicked={() => this.handlePlateSelected(post.id)}/>
        })
      
       
        return(

                <div className='search'>
                <input className='inputs' onChange={this.handleTextChange} name='title' type='text' placeholder='Game Title' />
                <button className='search-button' onClick={this.handleSearchClick}>Search</button>
                    <div className='search-layout'>
                        <div className='search-highlight'>
                            <Card id={this.state.selectedPostId}/>
                        </div>
                        <div className='search-results'>
                            {posts}
                            <Pagination
                                firstPageText={<i className='glyphicon glyphicon-chevron-left'/>}
                                lastPageText={<i className='glyphicon glyphicon-chevron-right'/>}
                                prevPageText={<i className='glyphicon glyphicon-menu-left'/>}
                                nextPageText={<i className='glyphicon glyphicon-menu-right'/>}
                                activePage={this.state.activePage}
                                itemsCountPerPage={10}
                                totalItemsCount={50}
                                onChange={this.handlePageChange}
                                />
                        </div>
                    </div>
            </div>
        )
    }
}