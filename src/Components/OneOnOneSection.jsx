import React, {useState} from 'react';


const OneOnOneSection = ({student})  => {
    const [commenterName, setCommenterName] = useState('');
    const [comment,setComment] = useState('');
    const [notes, setNotes] = useState ([]);

 const handleSubmit = (e) => {
    e.preventDefault();
    if (commenterName && comment) {
        const newNote = {commenterName, comment};
        setNotes([...notes, newNote]);
        setCommenterName('');
        setComment('');
    }
 };

return (
    <div className="one-on-one-section">
      <h3>1-on-1  Notes</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="commenterName">Your Name:</label>
        <input
        type="text"
        id="commenterName"
        value={commenterName}
        onChange={(e) => setCommenterName(e.target.value)}
        />
        <label htmlFor="comment">Comment:</label>
        <textarea
        id="comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        />
        <button type= "submit"> Add Note</button>
        </form>
        {notes.length > 0 && (
            <div className="notes-list">
                <h4>Previous Notes</h4>
                <ul>
                    {notes.map((note,index) => (
                      <li key={index}>
                        <strong>{note.commenterName}</strong>: {note.comment}
                      </li>  
                    ))}
                </ul>
                </div>
        )}
        </div>
        );
                    };
export default OneOnOneSection;