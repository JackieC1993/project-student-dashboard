import React,{useState} from "react";

const StudentCard = ({ student }) => {
const [showDetails, setShowDetails] = useState(false);

const toggleDetails = () => {
    setShowDetails(!showDetails)
};

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
        {showDetails && <StudentDetails student={student} />}
    </div>
  );
};

export default StudentCard;