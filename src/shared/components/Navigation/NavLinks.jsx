import React,{useContext, Fragment} from 'react'
import {NavLink} from 'react-router-dom'

import {AuthContetxt} from '../../context/auth-context'

const NavLINKS = (props) => {
    const auth = useContext(AuthContetxt);
    return (
        <ul className='nav-links'>
            <li>
                <NavLink to='/' exact>All Users</NavLink>
            </li>
            {
                auth.isLoggedIn && (
                    <Fragment>
                        <li>
                            <NavLink to={`/${auth.userId}/places`}>My Places</NavLink>
                        </li>
                            <li>
                            <NavLink to='/places/new'>Add Places</NavLink>
                        </li>
                    </Fragment>
                )
            }
            {
                !auth.isLoggedIn && (
                    <Fragment>
                        <li>
                            <NavLink to='/auth'>Authenticate</NavLink>
                        </li>
                    </Fragment>
                )
            }
            {
                auth.isLoggedIn && (
                    <Fragment>
                        <li>
                            <button onClick={auth.logout}>Logout</button>
                        </li>
                    </Fragment>
                )
            }

        </ul>
    )
}
export default NavLINKS;