import React, { Fragment } from 'react'
import {createPortal} from 'react-dom'
import {CSSTransition} from 'react-transition-group'
import Backdrop from './Backdrop'


import './modal.scss'

const ModalOverlay = (props) => {
    const content = (
        <div className={`modal ${props.className}`} style={props.style}>
            <header className={`modal__header ${props.headerClass}`}>
                <h2>{props.header}</h2>
            </header>
            <form onSubmit={props.onSubmit ? props.onSubmit : (event)=>{return event.preventDefault}} >
                <div className={`modal__content ${props.contentClass}`}>
                    {props.children}
                </div>
                <div className={`modal__footer ${props.footerClass}`}>
                    {props.footer}
                </div>
            </form>
        </div>
    )
    return createPortal(content,document.getElementById('modal-hook'))
}

const Modal = (props) => {
    return (
        <Fragment>
            {props.show && <Backdrop onClick={props.onCancel} />}
            <CSSTransition
                in={props.show}
                mountOnEnter
                unmountOnExit
                timeout={200}
                classNames='modal'
            >
                <ModalOverlay {...props}/>
            </CSSTransition>
        </Fragment>
    )
}

export default  Modal