import React from 'react';

import img from 'assets/images/logo.png';
import {} from './styles.scss';

function Header() {
  return (
    <div className="header">
      <h1 className="header-title">TRAFFICMEISTER</h1>
      <img src={img} alt="TRAFFICMEISTER" height="141" width="237" />
    </div>
  );
}

export default Header;
