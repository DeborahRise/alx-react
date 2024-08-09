import React from 'react'
import CourseListRow from './CourseListRow'
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import CourseShape from './CourseShape';

const styles = StyleSheet.create({
  table: {
    width: '100%',
    border: '1px solid #ccc',
  },
  th: {
    backgroundColor: '#f5f5f5',
    textAlign: 'left',
  },
  td: {
    padding: '8px',
  },
});

const CourseList = ({ listCourses }) => {
  return (
    <table className={css(styles.table)}>
       <thead>
           <CourseListRow isHeader={true} textFirstCell="Available courses" />
           <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
       </thead>
       <tbody>
        {!listCourses ? (
          <CourseListRow isHeader={false} textFirstCell="No course available yet" textSecondCell="" />
        ) : (
          listCourses.map(course => (
            <CourseListRow key={course.id} isHeader={false} textFirstCell={course.name} textSecondCell={course.credit} />
          ))
        )
           }
       </tbody>
   </table>
  );
};

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape)
};

CourseList.defaultProps = {
  listCourses: []
};

export default CourseList;