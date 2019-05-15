import React from 'react'

import './Plate.css'

const plate = (props) => (

     
    <div>
    <div className='plate' onClick={props.clicked}>
        <div className='plate-layout'>
        <img src={props.image} alt='box art'/>
        <div className='plate-body'>
        <p className='title'>{props.name}</p>
        {/* <p>hello</p> */}
        <p>{props.release_date}</p>
        </div>
        </div>
        </div>
    </div>
)

   
export default plate