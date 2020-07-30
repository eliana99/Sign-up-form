import React from 'react';
import classNames from 'classnames';

import './Icon1.css'

export default (props) => (
  <i className={classNames('icon-1', `fa fa-${props.liga}`)} style={props.style} />
);
