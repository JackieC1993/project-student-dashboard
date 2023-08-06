import React, {useState} from 'react';


const StudentList = ( students ) => {
    return (
        <div className="student-list">
            {students.map((student) => (
<StudentDetails key ={student.id} student={student}/>
            ))}
        </div>
    );
};

export default StudentList;