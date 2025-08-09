import React from 'react';

const ContactSection = () => {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <div className="contact-content">
                    <div className="contact-text">
                        <p>
                            I'm always open to discussing new opportunities and interesting projects. 
                            Feel free to reach out if you'd like to work together!
                        </p>
                    </div>
                    <div className="contact-info">
                        <div className="contact-item">
                            <strong>Email:</strong>
                            <a href="mailto:yash.ponnaganti@gmail.com">yash.ponnaganti@gmail.com</a>
                        </div>
                        <div className="contact-item">
                            <strong>LinkedIn:</strong>
                            <a href="https://www.linkedin.com/in/yashwant-ponnaganti/" target="_blank" rel="noopener noreferrer">
                                linkedin.com/in/yashwant-ponnaganti
                            </a>
                        </div>
                        <div className="contact-item">
                            <strong>GitHub:</strong>
                            <a href="https://github.com/yashwant-creator" target="_blank" rel="noopener noreferrer">
                                github.com/yashwant-creator
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
