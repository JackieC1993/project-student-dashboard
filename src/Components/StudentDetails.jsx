import React, {useState} from 'react';
import OneOnOneSection from './OneOnOneSection';


const StudentDetails =({student}) => {
    return(
        <div className="student-details">
            <p>CodeWars Score: {student.codewars.current.total}</p>
            <p>Resume Certification: {student.certifications.resume ?'✅' : '❌'}</p>
            <p>LinkedIn Certification: {student.certfication.linkedin ?'✅' : '❌'}</p>
            <p>Github Certification: {student.certfication.github ?'✅' : '❌'} </p>
            <p>Mock Interview Certification: {student.certfication.mockInterview ?'✅' : '❌'}</p>
            <OneOnOneSection student={student} />
            
            <h3>Notes</h3>
            {student.notes.length > 0 ? (
                <ul>
                    {student.notes.map((note, index) => (
                        <li key ={index}>
                        <strong>{note.commenter}</strong> : {note.comment}
                        </li>
                    ))}
                    </ul>
                    ) : (
                        <p> No notes available</p>
                    )}

                    <h3>Cohort Information</h3>
                    <p>Cohort Code: {student.cohort.cohortCode}</p>
                    <p>Cohort Start Date: {student.cohort.cohortStartDate}</p>
                 <p>Assignment Score: {student.cohort.scores.assignments} </p>
                 <p>Project Score: {student.cohort.scores.projects}</p>
                 <p>Assessment Score: {student.cohort.scores.assessment}</p>
                 </div>
    );
                    };

    
export default StudentDetails;