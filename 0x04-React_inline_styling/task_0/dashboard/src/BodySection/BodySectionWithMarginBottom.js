import React from 'react';
import BodySection from './BodySection';
import { Children } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  bodySectionWithMargin: {
    marginBottom: '70px',
  },
})

const BodySectionWithMarginBottom = (props) => {
  return (
    <div className={css(styles.bodySectionWithMargin)}>
        <BodySection {...props}/>
    </div>
  )
}

BodySectionWithMarginBottom.propTypes = {
    title: PropTypes.string.isRequired,
    Children: PropTypes.node,
}
export default BodySectionWithMarginBottom