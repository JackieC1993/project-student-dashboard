import React, {useState} from "react";
import data from "./data/data.json"
import OneOnOneSection from "./Components/OneOnOneSection";
import StudentList from "./Components/StudentList";
import StudentCard from "./Components/StudentCard";
import StudentDetails from "./Components/StudentDetails";
import "./index.css"


function App() {
  return (
    <div className="app">
      <h1>Student Dashboard</h1>
      <StudentCard/>
      <OneOnOneSection/>
       {/* <StudentDetails/>  */}
      {/* <StudentList/>  */} 
      
       
    </div>
  );
}

export default App;
