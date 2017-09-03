import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

const Fade = ({ children, ...props }) =>
  <CSSTransitionGroup
    {...props}
    component="div"
    transitionName="fade"
    transitionEnterTimeout={300}
    transitionLeaveTimeout={1}
  >
    {children}
  </CSSTransitionGroup>;

export default Fade;
