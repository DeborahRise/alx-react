import React from 'react';
import BodySection from './BodySection';
import { Children } from 'react';
import PropTypes from 'prop-types';
import './BodySectionWithMarginBottom.css';

const BodySectionWithMarginBottom = (props) => {
  return (
    <div className='bodySectionWithMargin'>
        <BodySection {...props}/>
    </div>
  )
}

BodySectionWithMarginBottom.PropTypes = {
    title: PropTypes.string.isRequired,
    Children: PropTypes.node,
}
export default BodySectionWithMarginBottom