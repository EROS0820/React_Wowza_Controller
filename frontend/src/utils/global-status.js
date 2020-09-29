import React from 'react';
import globalHook from 'use-global-hook';

const initialState = {
    email: '',
    password: '',
};

const actions = {
    setEmail: (store, email)=>{
        store.setState({email : email});
    },
    setPassword: (store, password)=>{
        store.setState({password : password});
    },
};
 
const useGlobal = globalHook(React, initialState, actions);

export default useGlobal;