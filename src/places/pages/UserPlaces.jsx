import React,{useEffect, Fragment,useState} from 'react'
import PlaceList from '../components/PlaceList'
import {useParams} from 'react-router-dom'

import {useHttpClient} from '../../shared/hook/http-hook';
import ErrorModal from '../../shared/components/UIElemets/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElemets/LoadingSpinner';

const UserPlace = ()=>{
    const [loadedPlaces, setLoadedPlaces] = useState(false);
    const {isLoading,error,sendRequest,clearError} = useHttpClient();
    const userId = useParams().userId;

    useEffect(()=>{

        const fetchPlace = async ()=>{
            try {
                const responseData = await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/places/user/${userId}`);
                setLoadedPlaces(responseData.places)
               
           } catch (err) {
               
           }
        }
        fetchPlace()
    },[sendRequest,userId]);
    const placeDeleteHandler = (deletedPlaceId)=>{
        setLoadedPlaces(prevPlace=>(prevPlace.filter(place=>place.id !== deletedPlaceId)));
        
    }
    return (
        <Fragment>
            <ErrorModal error={error} onClear={clearError}/>
            {isLoading && (
                <div className='center'>
                    <LoadingSpinner />
                </div>
            )}
            {!isLoading && loadedPlaces && <PlaceList items={loadedPlaces} onDeletePlace={placeDeleteHandler}/>}
        </Fragment>
    )
}

export default UserPlace