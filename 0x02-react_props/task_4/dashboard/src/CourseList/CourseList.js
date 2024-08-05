import React from 'react'
import CourseListRow from './CourseListRow'

const CourseList = () => {
  return (
    <table id='CourseList'>
        <thead>
            <CourseListRow isHeader={true} textFirstCell="Course name"  />
        </thead>
    </table>
  )
}

export default CourseList