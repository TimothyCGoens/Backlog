import React, {Component} from 'react'
import Plate from './Plate'
import Card from './Card'
import axios from 'axios'
import Pagination from 'react-js-pagination'
import {connect} from 'react-redux'
import './Search.css'

class Search extends Component {

    constructor(props) {
        super(props)

        this.state = {
            activePage: 1,
            selectedGameId: null,
            games: [],
            title: ''
        }
    }
    handlePageChange(pageNumber) {
        this.setState({activePage: pageNumber})
    }

    handleTextChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    // clicking a plate will populate the sidebar with info
    handlePlateSelected = (id) => {
  
    
        axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://www.giantbomb.com/api/game/${id}/?api_key=f194765e78f8558180a48f79cbb6b02fe6f9bca2&format=JSON`,{crossdomain:true})
                .then(response => {
                    this.props.dispatchCard(response.data.results)
                    console.log(response.data.results.publishers)
                })  
    }


    handleSearchClick = () => {

    axios.get(`${'https://cors-anywhere.herokuapp.com/'}http://www.giantbomb.com/api/search/?api_key=f194765e78f8558180a48f79cbb6b02fe6f9bca2&format=json&query="${this.state.title}"&resources=game`,{crossdomain:true})
    .then(response => {
      this.setState({games: response.data.results})
    })
}

    render() {

        const games = this.state.games.map((game) => {
            return <Plate 
                    key={game.guid} 
                    name={game.name} 
                    image={game.image.medium_url} 
                    // release_date={game.original_release_date}
                    clicked={() => this.handlePlateSelected(game.guid)}/>
        })
        
      
       
        return(

                <div className='search'>
                <input className='inputs' onChange={this.handleTextChange} name='title' type='text' placeholder='Game Title' />
                <button className='search-button' onClick={this.handleSearchClick}>Search</button>
                    <div className='search-layout'>
                        <div className='search-highlight'>
                            <Card id={this.state.selectedGameId}/>
                        </div>
                        <div className='search-results'>
                            {games}
                            {/* <Pagination
                                firstPageText={<i className='glyphicon glyphicon-chevron-left'/>}
                                lastPageText={<i className='glyphicon glyphicon-chevron-right'/>}
                                prevPageText={<i className='glyphicon glyphicon-menu-left'/>}
                                nextPageText={<i className='glyphicon glyphicon-menu-right'/>}
                                activePage={this.state.activePage}
                                itemsCountPerPage={10}
                                totalItemsCount={50}
                                onChange={this.handlePageChange}
                                /> */}
                        </div>
                    </div>
            </div>
        )
    }
}



const mapDispatchToProps = (dispatch) => {
    return ({
        dispatchCard: (game) => {dispatch({type: 'CARD_LOADED', value: game})
    }
    })
    
}



export default connect(null, mapDispatchToProps)(Search)