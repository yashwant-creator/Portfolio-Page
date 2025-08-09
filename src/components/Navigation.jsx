import React from 'react';

const Navigation = () => {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <ul className="nav-menu">
                    <li className="nav-item">
                        <a href="#home" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#skills" className="nav-link">Skills</a>
                    </li>
                    <li className="nav-item">
                        <a href="#experience" className="nav-link">Experience</a>
                    </li>
                    <li className="nav-item">
                        <a href="#projects" className="nav-link">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-link">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a href="https://docs.google.com/document/d/1uAb45Q4v1hD_Yu3Pkz-_xB4MyHYyAFAvT9QCmT26d88/edit?tab=t.0" target = "_blank" className="nav-link">Resume</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;
