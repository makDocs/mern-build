import {createContext} from 'react';

export const AuthContetxt = createContext({
    isLoggedIn:false,
    userId:null,
    token:null,
    login:()=>{},
    logout:()=>{}
})