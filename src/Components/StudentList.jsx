import React, { useState } from "react";
import StudentCard from "./StudentCard";
import data from "../data/data.json";

function StudentList() {
  const [selectedCohort, setSelectedCohort] = useState(null);
  const cohorts = Array.from(new Set(data.map((student) => student.cohort)));

  const filteredStudents = selectedCohort
    ? data.filter((student) => student.cohort === selectedCohort)
    : data;

  return (
    <div>
      {/* Display the unique list of cohorts */}
      <ul>
        {cohorts.map((cohort) => (
          <li
            key={cohort}
            onClick={() => setSelectedCohort(cohort)}
            style={{ cursor: "pointer" }}
          >
            {cohort}
          </li>
        ))}
      </ul>
      {filteredStudents.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  );
}
export default StudentList;
