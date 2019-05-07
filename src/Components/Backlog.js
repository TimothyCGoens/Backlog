import React, {Component} from 'react'
import {Plate} from './Plate'
import './Backlog.css'

export class Backlog extends Component {
    render() {
        return(
            <div className='backlog'>
            <h1>Welcome to the Backlog</h1>
            <Plate />
            </div>
        )
    }
}