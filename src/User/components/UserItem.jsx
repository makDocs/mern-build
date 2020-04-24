import React from 'react'

import Avator from '../../shared/components/UIElemets/Avator'

import {Link} from 'react-router-dom'
import Card from '../../shared/components/UIElemets/Card'

const UserItem = (props) => {
    console.log(props)
    return (
        <li className='user-item'>
        <Card className='user-item__content'>
            <Link to={`/${props.id}/places`}>
                    <div className='user-item__image'>
                        <Avator src={`${process.env.REACT_APP_ASSET_URL}/${props.image}`} alt={props.name}/>
                    </div>
                    <div className='user-item__info'>
                        <h2>{props.name}</h2>
                        <h3>
                            {props.placesCount} {props.placesCount === 1 ? 'Place' : 'Places'}    
                        </h3>
                    </div>
                    </Link>
            </Card>
        </li>
    )
}

export default UserItem;