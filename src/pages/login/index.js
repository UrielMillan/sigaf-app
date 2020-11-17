import React from 'react';
import LoginContainer from '../../containers/loginContainer';
import './login-style.css';

const Login = ({match}) =>{
    return(
        <div className='wrapper'>
            <div className='info-container'>
                <div className='side-container'>
                    changos
                </div>
                <div className='form-container'>
                    <LoginContainer />
                </div>
            </div>
        </div>
    )
}

export default Login;