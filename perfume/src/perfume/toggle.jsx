// // ThemeToggle.jsx
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

// Main App Component
const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        if (!isDarkMode) {
            document.body.style.backgroundColor = 'black'; // Dark mode background
            document.body.style.color = 'white'; // Dark mode text color
        } else {
            document.body.style.backgroundColor = 'white'; // Light mode background
            document.body.style.color = 'black'; // Light mode text color
        }
    };

    return (
        <div style={{  padding: '50px',position:'fixed',top:'0',zIndex:'1000'}}>
            <div onClick={toggleTheme} style={{ cursor: 'pointer', fontSize: '24px' }}>
                <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
            </div>
        </div>
    );
};

export default App;

