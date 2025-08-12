import React from 'react';
import DoubleScrollArrows from './DoubleScrollArrows';
import profilePicture from '../assets/profilePicture.jpeg';

const HeroSection = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <div className="hero-text">
                    <h1 className="hero-title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem' }}>
                        <img
                            src={profilePicture}
                            alt="Profile"
                            className="hero-profile-pic styled-profile-pic"
                        />
                        <span>
                            Hi, I'm <span className="highlight">Yashwant Ponnaganti</span>
                        </span>
                    </h1>
                    <h2 className="hero-subtitle">A full-time undergraduate student seeking internship opportunities</h2>
                    <p className="hero-description">
                        UMD '29 | Computer Science: Machine Learning Specialization |
                         Interested in AI, Data Science, and Tech for Good.
                    </p>
                    <div className="hero-buttons">
                        <a href="#projects" className="btn btn-primary">View My Work</a>
                        <a href="#contact" className="btn btn-secondary">Get In Touch</a>
                    </div>
                </div>
            </div>
            {/* Remove old ScrollArrow, add DoubleScrollArrows for up/down navigation */}
            <DoubleScrollArrows upTargetId="about" downTargetId="skills" />
        </section>
    );
import DoubleScrollArrows from './DoubleScrollArrows';
};

export default HeroSection;
