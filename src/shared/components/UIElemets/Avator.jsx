import React from 'react'

import './Avator.scss'

const Avator = (props) => {
    return (
        <div className={`avator ${props.className}`} style={props.style}>
            <img
                src={props.src}
                alt={props.alt}
                style={{
                    width:props.width ,height:props.height
                }}
            />
        </div>
    )
}
export default Avator;