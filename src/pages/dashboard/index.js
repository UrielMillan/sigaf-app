import React from 'react';
import Header from '../../components/header';
import UserForm from '../../components/userForm';
import './page-style.css';

const Dashboard = ({match}) =>{
    return(
        <div className='dashboard'>
           <Header />
           <UserForm />
        </div>
    )
}

export default Dashboard;