import React, { useState } from "react";
import data from "./data/data.json";
import OneOnOneSection from "./Components/OneOnOneSection";
import StudentCard from "./Components/StudentCard";
import StudentDetails from "./Components/StudentDetails";
import "./index.css";
import CohortCard from "./Components/CohortCard";

function App() {
const studentCount = data.length;
 const student = data[0]
const [selectedCohort,setSelectedCohort] = useState('')
const handleCohortClick = (cohortCode) => {
  setSelectedCohort(cohortCode);
};
    const renderStudents = data.map(
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
      <div className="cohort-links">
        <h2>Choose a Class by Start Date</h2>
        <a onClick={() => handleCohortClick('Spring2025')} href="#!">Spring 2025</a>
        <a onClick={() => handleCohortClick('Summer2025')} href="#!">Summer 2025</a>
        <a onClick={() => handleCohortClick('Fall2025')} href="#!">Fall 2025</a>
        <a onClick={() => handleCohortClick('Winter2025')} href="#!">Winter 2025</a>
        <a onClick={() => handleCohortClick('Spring2026')} href="#!">Spring 2026</a>
        <a onClick={() => handleCohortClick('Summer2026')} href="#!">Summer 2026</a>
        <a onClick={() => handleCohortClick('Fall2026')} href="#!">Fall 2026</a>
        <a onClick={() => handleCohortClick('Winter2026')} href="#!">Winter2026</a>
      </div>
      <p>Number of Students: {data.length}</p>
      {renderStudents}
     <OneOnOneSection/>
      <StudentCard student={data[0]} />

      {selectedCohort && <CohortCard cohortCode={selectedCohort} />}
    </div> 
  );
}
export default App;
