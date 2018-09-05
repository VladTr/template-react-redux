import React from 'react';
import { Link } from 'react-router-dom'


const Header = () => (
    <header>
    <nav>
      <ul>
        <li><Link to='/'>about</Link></li>
        <li><Link to='/to-do'>to do</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header;