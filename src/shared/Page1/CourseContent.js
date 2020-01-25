import React, { Component } from 'react';
import CourseContentquest from './CourseContentquest';
import ContentApplicationDevelopmentQ from './ContentApplicationDevelopmentQ';
import OverallCourseContent from './OverallCourseContent';
import TheoryContentQuestions from './TheoryContentQuestions';

class CourseContent extends Component {
    render() {
        return (
            <div className="row justify-content-md-center">
                <div className="col-lg-9" style={{marginTop:'30px'}}>
                    <h5>Course Evaluation</h5>
                    <p class="text-justify"> 
                        The following questions are based on the course content, and overall knowledge procured from the course.
                    </p>
                    <CourseContentquest/>
                    <ContentApplicationDevelopmentQ/>
                    <TheoryContentQuestions/>
                    <OverallCourseContent/>
                </div>
            </div>  
        );
    }
}

export default CourseContent;