import React from 'react';
import { NavLink } from "react-router-dom";

function NotFount(props) {
    return (
        <div>
            <h1 className='err404'>404</h1>
            <h4 className='not-found'>PAGE NOT FOUND</h4>
          <button className ='not-found-btn'> <NavLink to="/">
                  Home
                </NavLink>
                </button> 
        </div>
    );
}

export default NotFount;