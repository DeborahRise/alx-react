import React from 'react'
import { Children } from 'react'
import PropTypes from 'prop-types';
import './BodySection.css';

const BodySection = ({title, Children}) => {
  return (
    <div className='bodySection'>
        <h2>{title}</h2>
        {Children}
    </div>
  )
}
BodySection.PropTyes = {
    title: PropTypes.string.isRequired,
    Children: PropTypes.node,
};

export default BodySection;