import React, {useState} from 'react';


const StudentDetails =({student}) => {
    return(
        <div className="student-details">
            <p>CodeWars Score: {student.codewars.current.total}%</p>
            <p>Resume Certification: {student.certifications.resume ?'✅' : '❌'}</p>
            <p>LinkedIn Certification: {student.certfication.linkedin ?'✅' : '❌'}</p>
            <p>Github Certification: {student.certfication.github ?'✅' : '❌'} </p>
            <p>Mock Interview Certification: {student.certfication.Interview ?'✅' : '❌'}</p>
            <OneOnOneSection student={student} />
        </div>
    );
};

    
export default StudentDetails;