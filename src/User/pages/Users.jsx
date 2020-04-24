import React , {
    useEffect,
    useState,
    Fragment
} from 'react'

import UserList from '../components/UserList'

import ErrorModal from '../../shared/components/UIElemets/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElemets/LoadingSpinner';

import {useHttpClient} from '../../shared/hook/http-hook'

import './style.scss'

const Users = () => {
    const {isLoading,error,sendRequest,clearError} = useHttpClient();

    const [loadedUser  , setloadedUser  ] = useState();
    useEffect(()=>{
        const fetchUsers = async ()=>{
            try {
                const responsData = await sendRequest(process.env.REACT_APP_BACKEND_URL+'/users');
               
                setloadedUser(responsData.users);
                console.log(responsData)
            } catch (err) {}
        }
        fetchUsers();
    },[sendRequest]);
    
    return (
        <Fragment>
            <ErrorModal error={error} onClear={clearError}/>
            {isLoading && (
                <div className='center'>
                    <LoadingSpinner />
                </div>
            )}
            {!isLoading && loadedUser && (<UserList items={loadedUser}/>)}
        </Fragment>
    )
}

export default Users;
