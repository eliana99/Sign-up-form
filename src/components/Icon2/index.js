import React from 'react';
import classNames from 'classnames';

import './Icon2.css'

export default (props) => (
  <i className={classNames('icon-2', `fa fa-${props.liga}`)} style={props.style} />
);
