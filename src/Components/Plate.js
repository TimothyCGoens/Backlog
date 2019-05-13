import React from 'react'

import './Plate.css'

const plate = (props) => (

     
    <div>
    <div className='plate' onClick={props.clicked}>
        <div className='plate-layout'>
        <img src='https://images.g2a.com/newlayout/323x433/1x1x0/26c128e4cba2/5cc00ab8ae653a6010535245' />
        <div className='plate-body'>
        <p className='title'>{props.name}</p>
        <p>{props.street}</p>
        <p>{props.city}</p>
        </div>
        </div>
        </div>
    </div>
)

   
export default plate