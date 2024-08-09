import React from 'react'
import CourseListRow from './CourseListRow'
import PropTypes from 'prop-types';
import './CourseList.css'
import CourseShape from './CourseShape';

const CourseList = ({ listCourses }) => {
  return (
    <table id='CourseList'>
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