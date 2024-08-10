import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  rowStyle: { backgroundColor: '#f5f5f5ab' },
  headerStyle: { backgroundColor: '#deb5b545' },
});


const CourseListRow = ({ isHeader, textFirstCell, textSecondCell}) => {
  return (
    <tr className={isHeader ? css(styles.headerStyle) : css(styles.rowStyle)}>
    {isHeader ? (
         
        !textSecondCell ? (
            <th className={css(styles.headerStyle)} colSpan="2">{textFirstCell}</th>
            ) : (<>
                <th className={css(styles.headerStyle)}>{textFirstCell}</th>
                <th className={css(styles.headerStyle)}>{textSecondCell}</th>
                </>)
     ) : (
        <>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
        </>
     )}
    </tr> 
  );
};

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
};

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null
};

export default CourseListRow