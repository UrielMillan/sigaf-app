import React from 'react';
import Login from '../../containers/login';
import './signin-style.css';

const Signin = ({match}) =>{
    return(
        <div className='wrapper'>
            <div className='info-container'>
                <div className='side-container'>
                    changos
                </div>
                <div className='form-container'>
                    <Login />
                </div>
            </div>
        </div>
    )
}

export default Signin;