import React from 'react';
import ScrollArrow from './ScrollArrow';

const HeroSection = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <div className="hero-text">
                    <h1 className="hero-title">
                        Hi, I'm <span className="highlight">Yashwant Ponnaganti</span>
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
            <ScrollArrow targetId="skills" />
        </section>
    );
};

export default HeroSection;
