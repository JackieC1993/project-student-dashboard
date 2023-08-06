import React, {useState} from "react";
import data from "../data/data.json"

const StudentCard = (student) => {
    const {
        name,
        email,
        birthday,
        profilePhoto,
        certifications,
        codeWarScore,
    } = student ;

    const isOnTrack = data.map(
    (certifications) => {
        certifications.resume &&
        certifications.linkedin &&
        certifications.github &&
        certifications.mockInterview &&
        codeWarScore > 600
    }   
        )
return (
    <div className={`student-card ${isOnTrack ? "on-track" : "off-track"}`}>
    <img src={profilePhoto} alt={name} />
    <h3>{name}</h3>
    <p>Email: {email}</p>
    <p>Birthday: {birthday}</p>
    <p>CodeWars Score:{codeWarScore}%</p>
    </div>
);
};

export default StudentCard;