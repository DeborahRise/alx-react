import React from 'react'
import { Children } from 'react'

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
    Children: PropTyes.node,
};

export default BodySection;