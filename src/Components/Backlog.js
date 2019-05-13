import React, {Component} from 'react'
import Plate from './Plate'
import {Card} from './Card'
import './Backlog.css'

export class Backlog extends Component {
    render() {
        return(
            <div className='backlog'>
            <h1>Welcome to the Backlog</h1>
                <div className='backlog-layout'>
                    <div className='backlog-highlight'>
                        <Card />
                    </div>
                <div className='backlog-results'>
                    <Plate />
                </div>
            </div>
        </div>
        )
    }
}
