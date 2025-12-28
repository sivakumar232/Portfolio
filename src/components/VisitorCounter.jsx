import React, { useState, useEffect } from 'react';
import { FaEye } from 'react-icons/fa';

const VisitorCounter = () => {
    const [visits, setVisits] = useState(null);

    useEffect(() => {
        const namespace = 'sivakumar232_portfolio';
        const key = 'visits';
        const hasVisited = localStorage.getItem('visit_counted');

        if (!hasVisited) {
            // First time visitor: Increment the count
            fetch(`https://api.counterapi.dev/v1/${namespace}/${key}/up`)
                .then((res) => res.json())
                .then((data) => {
                    setVisits(data.count);
                    localStorage.setItem('visit_counted', 'true');
                })
                .catch((err) => console.error("Counter Error:", err));
        } else {
            // Returning visitor: Just get the current count without incrementing
            fetch(`https://api.counterapi.dev/v1/${namespace}/${key}/`)
                .then((res) => res.json())
                .then((data) => setVisits(data.count))
                .catch((err) => console.error("Counter Error:", err));
        }
    }, []);

    if (visits === null) return null;

    return (
        <span>
            visits <span className="text-black dark:text-white font-semibold">#{visits.toLocaleString()}</span>
        </span>
    );
};

export default VisitorCounter;
