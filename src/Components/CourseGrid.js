import React from "react";
import CourseTile from "./CourseTile";

function CourseGrid({ data }) {
  return (
    <div className='tile-holder'>
      {data.map((course) => (
        <CourseTile Coursename={course.name} courseId={course.id} />
      ))}
    </div>
  );
}

export default CourseGrid;
