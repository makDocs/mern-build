import React  ,{
    Suspense
} from 'react'
import {
    BrowserRouter as BRouter,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import MainNavigation from './shared/components/Navigation/MainNavigation';

import {AuthContetxt} from './shared/context/auth-context';

import './App.scss'

import {useAuth} from './shared/hook/auth-hook';

import LoadingSpinner from './shared/components/UIElemets/LoadingSpinner';


const Users = React.lazy(()=> import('./User/pages/Users'));
const NewPlace = React.lazy(()=> import('./places/pages/NewPlace'));
const UpdatePlace = React.lazy(()=> import('./places/pages/updatePlace'));
const UserPlaces = React.lazy(()=> import('./places/pages/UserPlaces'));
const Auth = React.lazy(()=> import('./User/pages/Auth'));




const App = () => {

    const {
        token,
        login,
        logout,
        userId
    } = useAuth()
    

    let routes ;

    if(token){
        routes = (
            <Switch>
                <Route path='/' exact>
                    <Users />
                </Route>
                <Route path='/:userId/places' exact>
                    <UserPlaces />
                </Route>
                <Route path='/places/new' exact>
                    <NewPlace />
                </Route>
                <Route path='/places/:placeId' >
                    <UpdatePlace />
                </Route>
                <Redirect to='/' />
            </Switch>
        )
    }
    else{
        routes = (
            <Switch>
                <Route path='/' exact>
                    <Users />
                </Route>
                <Route path='/:userId/places' exact>
                    <UserPlaces />
                </Route>
                <Route path='/auth' >
                    <Auth />
                </Route>
                <Redirect to='/auth'/>
            </Switch>
        )
    }

    return (
        <AuthContetxt.Provider value={{
            isLoggedIn:!!token,
            token,
            login,
            logout,
            userId
        }}>
            <BRouter>
                <MainNavigation/>   
                <main>
                    <Suspense fallback={
                        <div className='center'>
                            <LoadingSpinner/>
                        </div>
                    }>
                        {routes}
                    </Suspense>
                </main>
            </BRouter>
        </AuthContetxt.Provider>
    )
}

export default App;