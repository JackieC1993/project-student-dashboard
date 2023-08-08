import React, { useState } from "react";
import data from "./data/data.json";
import OneOnOneSection from "./Components/OneOnOneSection";
import StudentCard from "./Components/StudentCard";
import CohortMenu from "./Components/CohortMenu";
//import StudentDetails from "./Components/StudentDetails";
import "./index.css";

function App() {
const handleSelectCohort = (cohort) => {
  setSelectedCohort(cohort);
}  
const studentCount = data.length;
const student = data[0]
const [selectedCohort,setSelectedCohort] = useState('')
const handleCohortClick = (cohortCode) => {
setSelectedCohort(cohortCode);
};
    const renderStudents = data.map(
      (eachStudentObj) => (
  
        <div className="card_container" key={eachStudentObj.id}>
  
          <img src={eachStudentObj.profilePhoto} alt={`Image of Student: ${eachStudentObj.names.preferredName}`}/>
  
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
      <div className="totalStudents">
      <p>Number of Students: {data.length}</p>
      <CohortMenu onSelectCohort={handleSelectCohort}/>
      <div className="students-list">
        {data.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
</div>
<div>
      {renderStudents}
     <OneOnOneSection/>
      <StudentCard student={student} />
      {/* <StudentDetails/> */}
      {selectedCohort && <CohortCard cohortCode={selectedCohort} />}

      </div> 
      </div>
  );
}
export default App;
