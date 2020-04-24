import React from 'react'
import PlaceItem from './PlaceItem';
import Card from '../../shared/components/UIElemets/Card'
import './style.scss'
import Button from '../../shared/components/FormElements/Button';


 const ProductList = (props) => {

    if(props.items.length === 0){
        return(
            <div className='center place-list'>
                <Card>
                    <h2>No Places found . Maybe create one?</h2>
                    <Button to='/places/new'>Share Place</Button>
                </Card>
            </div>
        )
    }

    return (
        <ul className='place-list'>
            {
                props.items.map(place=>{
                    return(
                        <PlaceItem 
                            key={place.id}
                            id={place.id}
                            name={place.name}
                            image={place.image}
                            title={place.title}
                            description={place.description}
                            address={place.address}
                            creatorId={place.creator}
                            coordinates={place.location}
                            onDelete={props.onDeletePlace}

                        />
                    )
                })
            }
        </ul>
    )
}

export default ProductList;