import React, {Component} from 'react'
import './Plate.css'

export class Plate extends Component {
    render() {
        return(
            <div className='plate'>
            <div className='plate-layout'>
            <img src='https://images.g2a.com/newlayout/323x433/1x1x0/26c128e4cba2/5cc00ab8ae653a6010535245' />
            
            <div className='plate-body'>
            <p className='title'>Game Title</p>
            <p>Developer</p>
            <p>Publisher</p>
            </div>
            </div>
            </div>
        )
    }
}