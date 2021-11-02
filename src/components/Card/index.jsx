import React, {useState} from 'react';
import './style.css';

export const Card = ({size, joke, punchline}) => {
    const [ showPunchline, setShowPunchline ] = useState(false);

    const handleMouseEnter = () => setShowPunchline(true);
    const handleMouseLeave = () => setShowPunchline(false);

    return (
        <div className={`card ${size}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
            <h3>{joke}</h3>
            <h4> {showPunchline ? punchline: "See more..."}</h4>
        </div>
    )
}
