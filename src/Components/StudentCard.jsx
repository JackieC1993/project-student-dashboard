import React, { useState } from "react";
import data from "../data/data.json";

const StudentCard = (student) => {
  const { name, email, birthday, profilePhoto, certifications, codeWarScore } =
    student;

  const isOnTrack = data.map((student) => {
    student.resume &&
      student.linkedin &&
      student.github &&
      student.mockInterview &&
      codeWarScore > 600;
  });
  return (
    <div className={`student-card ${isOnTrack ? "on-track" : "off-track"}`}>
      <img src={student.profilePhoto} alt={name} />
      <h3>{name}</h3>
      <p>Email: {student.username}</p>
      <p>Birthday: {student.dob}</p>
      <p>CodeWars Score:{student.codeWarScore}%</p>
    </div>
  );
};

export default StudentCard;
