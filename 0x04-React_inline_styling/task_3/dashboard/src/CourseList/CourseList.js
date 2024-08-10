import React from 'react'
import CourseListRow from './CourseListRow'
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import CourseShape from './CourseShape';

const styles = StyleSheet.create({
  table: {
    width: '100%',
    border: '2px solid #ccc',
  },
  th: {
    backgroundColor: '#deb5b5',
    textAlign: 'center',
  },
  td: {
    padding: '8px',
  },
});

const CourseList = ({ listCourses }) => {
  return (
    <table id='CourseList' className={css(styles.table)}>
       <thead className={css(styles.th)}> 
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