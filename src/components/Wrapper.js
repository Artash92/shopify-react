import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';
import SubFooter from './SubFooter';
import SubsForm from './SubsForm';
import Search from './Logo';
//import Login from './Login';
import { Outlet } from 'react-router-dom';

function Wrapper(props) {
   
    return (
        <div>

            < Header />
            <Search />
            < Navigation />
            <Outlet/>
            <SubsForm />
           
            <Footer />
           <SubFooter />
        </div>
    );
}

export default Wrapper;