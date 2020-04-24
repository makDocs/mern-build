import React from 'react'
import UserItem from './UserItem';
import Card from '../../shared/components/UIElemets/Card'

 const UserList = (props) => {
    console.log(props)
    if(props.items.length === 0){
        return(
            <div className='center'>
                <Card>
                    <h2>No User found .</h2>
                </Card>
            </div>
        )
    }

    return (
        <ul className='user-list'>
            {
                props.items.map(user=>{
                    return(
                        <UserItem 
                            key={user.id}
                            id={user.id}
                            name={user.name}
                            image={user.image}
                            placesCount={user.places.length}

                        />
                    )
                })
            }
        </ul>
    )
}

export default UserList;