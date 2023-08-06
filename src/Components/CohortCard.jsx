import React, { useState } from "react";
import data from "../data/data.json";

const CohortCard = ({ cohortCode }) => {
  const [showStudents, setShowStudents] = useState(false);

  const studentsInCohort = data.filter(
    (student) => student.cohort.cohortCode === cohortCode
  );
  return (
    <div className="cohort-card">
      <h2>{cohortCode}</h2>
      <button onClick={() => setShowStudents(!showStudents)}>
        {showStudents ? "Hide Students" : "Show Students"}
      </button>

      {showStudents && (
        <div className="students">
          {studentsInCohort.map((student) => (
            <div className="student-card" key={student.id}>
              {/* Display student details here */}
              {/*For example: */}
              <p>Name: {student.name.preferredName}</p>
              <p>Email: {student.username}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default CohortCard;
