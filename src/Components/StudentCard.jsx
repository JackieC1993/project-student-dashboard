import React, {useState} from "react";
import data from "../data/data.json"
import StudentDetails from "./StudentDetails"

const studentCard = ({ student }) => {
    const [showDetails, setShowDetails] = useState(false);
   
const toggleDetails = () => {
    setShowDetails(!showDetails)
};

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
    <div className="student-card">
        <img src={student.profilePhoto} alt={student.name} />
        <h2>{student.name}</h2>
        <p>{student.username}</p>
        <p>Birthday: {student.birthday}</p>
        <p>On Track: {student.onTrack ? 'Yes' : 'No'}</p>
        <button onClick={toggleDetails}>
            {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
        {showDetails ? (<StudentDetails student={student}/>) :null}
    <div className={`student-card ${isOnTrack ? "on-track" : "off-track"}`}>
    <img src={profilePhoto} alt={name} />
    <h3>{name}</h3>
    <p>Email: {email}</p>
    <p>Birthday: {birthday}</p>
    <p>CodeWars Score:{codeWarScore}%</p>
    </div>
    </div>
);
}
export default studentCard;