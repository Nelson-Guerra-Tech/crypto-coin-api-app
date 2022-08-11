import React from 'react';

// styles
import './Navbar.css';
import { FaCoins } from 'react-icons/fa';

function Navbar() {
  return (
    <div>
      <div className='navbar'>
        <FaCoins className='icon' />
        <h1>
          Coin <span className='purple'>Search</span>
        </h1>
      </div>
    </div>
  );
}

export default Navbar;
