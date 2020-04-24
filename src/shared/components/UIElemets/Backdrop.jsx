import React from 'react'

import ReactDOM from 'react-dom'
import './backdrop.scss'

const SideDrawer = (props) => {


    return ReactDOM.createPortal(
        <div className='backdrop' onClick={props.onClick}></div>,
        document.querySelector('#backdrop-hook')
    )
}
export default SideDrawer;