import React, {Component} from 'react'
import Axios from 'axios'
import BackLogPlate from './BackLogPlate'
import Card from './Card'
import './Backlog.css'
import { connect } from 'react-redux';

class Backlog extends Component {

    constructor() {
        super()
        this.state = {
            log: [],
            selectedGameId: null,
        }
    }

    componentDidMount() {
        Axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://thebacklogapp.herokuapp.com/backlog/${this.props.user}`)
        .then(response => {
            this.setState({log: response.data})
            console.log(response.data)
        })
    }

    handlePlateSelected = (id) => {
        Axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://thebacklogapp.herokuapp.com/backlog/${this.props.user}`)
        .then(response => {
            console.log(response.data)
        })
    }



    render() {
        if (this.props.gameSelected === false) {
            return (
                <div></div>
            )
        }

        const games = this.state.log.map((game) => {
            console.log(game)
            return <BackLogPlate 
                    key={game.guid} 
                    name={game.name} 
                    image={game.image} 
                    release_date={game.original_release_date}
                    clicked={() => this.handlePlateSelected(game.guid)}/>
        })

        return(
            <div className='backlog'>
            <h1>Welcome to your Backlog</h1>
                <div className='backlog-layout'>
                    <div className='backlog-highlight'>
                        {/* <Card id={this.state.selectedGameId}/> */}
                    </div>
                <div className='backlog-results'>
                    {games}
                </div>
            </div>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        user: state.uid
    }
}

export default connect(mapStateToProps)(Backlog)