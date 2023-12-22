import React, { useState } from 'react';

const Student = ({ id, name, image, email }) => {
    const [showDetails, setShowDetails] = useState(false);
    const handleToggleDetails = () => {
        setShowDetails(!showDetails);
    };
    return (
        <div className="student">
            <img src={image} alt={name} />
            <div>
                <h2>{name}</h2>
                <p>ID: {id}</p>
                <p>Email: {email}</p>
                <button onClick={handleToggleDetails}>
                    {showDetails ? 'Hide Details' : 'Show Details'}
                </button>
                {showDetails && (
                    <div className="additional-details">
                        <p>Additional details:</p>
                        <a href="https://www.facebook.com/ndtchin">Facebook</a><br/>
                        <a href="https://www.instagram.com/_ndtchin/">Instagram</a><br/>
                        <a href="https://github.com/NDTchin">Github</a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Student;
