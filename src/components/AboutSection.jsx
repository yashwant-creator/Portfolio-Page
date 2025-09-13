import React from 'react';

const AboutSection = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            UMD |
                            Computer Science: Machine Learning Specialization | 
                            Interested in AI, Data Science, and Tech for Good.
                        </p>
                        <p>
                        I am an enthusiastic high school senior looking forward 
                        to majoring in Computer Science with a concentration in
                         Machine Learning. A creative problem solver with a solid
                          analytical mindset, I enjoy solving coding problems with a team
                           of dedicated professionals.
                        </p>
                    </div>
                    <div className="about-stats">
                        <div className="stat">
                            <h3>5+</h3>
                            <p>Years Experience</p>
                        </div>
                        <div className="stat">
                            <h3>10+</h3>
                            <p>Projects Completed</p>
                        </div>
                        <div className="stat">
                            <h3>5+</h3>
                            <p>Technologies Mastered</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
