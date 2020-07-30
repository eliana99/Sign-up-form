import React from 'react';

import './Header1.css'

export default ({ children, ...props }) => (
  <div className="header-1" style={props.style}>
    {children}
  </div>
);
