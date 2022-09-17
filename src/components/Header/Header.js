import React from 'react';
import './Header.css';
import HeaderImg from '../../images/logo.png'
const Header = () => {
    return (
        <div className='header-section'> 
                <img src={HeaderImg}/>
                <nav>
                      <a href="/shop">Shop</a>
                      <a href="/order">Order Review</a>
                      <a href="/inventory">Mange Inventory</a>
                      
                </nav>
        </div>
    );
};

export default Header;