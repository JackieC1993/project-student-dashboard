import React, { useState } from "react";

export const cohortOptions = [
    "Spring2025",
    "Summer2025",
    "Fall2025",
    "Winter2025",
    "Spring2026",
    "Summer2026",
    "Fall2026",
    "Winter2026",  
];
const CohortMenu =({ onSelectCohort }) => {
//     const cohortOptions = [
//         "Spring2025",
//         "Summer2025",
//         "Fall2025",
//         "Winter2025",
//         "Spring2026",
//         "Summer2026",
//         "Fall2026",
//         "Winter2026",  
//    ];

    return (
        <div className="cohort-menu">
            <h2>Choose a Cohort by Start Date</h2>
            {cohortOptions.map((cohort) => (
                <button key={cohort} onClick={()=> onSelectCohort(cohort)}>
                    {cohort}
                </button>
            ))}
        </div>
    );
};

export default CohortMenu;
