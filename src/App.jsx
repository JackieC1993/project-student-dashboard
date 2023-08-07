import React, { useState } from "react";
import data from "./data/data.json";
import OneOnOneSection from "./Components/OneOnOneSection";
import StudentCard from "./Components/StudentCard";
import StudentDetails from "./Components/StudentDetails";
import "./index.css";

function App() {
const studentCount = data.length;
 const student = data[0]
    const studentsToRender = data.map(
      (eachStudentObj) => (
  
        <div className="card_container" key={eachStudentObj.id}>
  
          <img src={eachStudentObj.profilePhoto} alt={`Image of Student: ${eachStudentObj.names.preferredName}`} />
  
          <h4>
            <div className="studentName" id={eachStudentObj.id}>
              {`Student Name: ${eachStudentObj.names.preferredName}`}
            </div>
            <div className="email">
              {`Email: ${eachStudentObj.username}`}
            </div>
            <div>{`Birthday: ${eachStudentObj.dob}`}
              <div className="startDate">
                {`Date Started: ${eachStudentObj.cohort.cohortCode}`}
              </div>
  </div>
  </h4>
  </div>
  )
  )

  
  
  
  
  
  
  
  

  return (
    <div className="app">
      <h1>Student Dashboard</h1>
      <p>Number of Students: {studentCount}</p>
      {studentsToRender}
     <OneOnOneSection/>
      <StudentCard />
      <StudentDetails/>
    </div>
  );
}
export default App;
