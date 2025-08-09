import React from 'react';

const ExperienceSection = () => {
    const experiences = [
        {
            title: "Research Internship: NEERU Smart Water bottle",
            company: "University of Rhode Island, Dept. of Biotechnology",
            duration: "July 2024 - Aug 2024",
            description: "Conducted research, designed & built \"Neeru\", a smart water bottle accessory to combat dehydration. Presented research poster at MIT Conference (IEEE MIT URTC 2024).",
            technologies: ["Research", "Hardware Design", "IEEE"],
            links: []
        },
        {
            title: "Summer program: Application of AI in Finance Industry",
            company: "University of California San Diego",
            duration: "July 2024 - Aug 2024",
            description: "Learnt & built applications for predictive modeling in finance, banking, wealth, asset mgmt., & fraud detection using AI Technology. Received 2.5 credits from University of California San Diego.",
            technologies: ["AI", "Finance", "Predictive Modeling", "Python"],
            links: [
                { text: "AI + Finance Certificate", url: "#" }
            ]
        },
        {
            title: "AI/ML Internship",
            company: "University of Rhode Island, Dept. of Biotechnology",
            duration: "July 2023 - Aug 2023",
            description: "Built an AI model (under guidance of a URI mentor) to detect activity types on a smartwatch, used in an ADHD study to track and predict the onset of ADHD in children aged 7-11.",
            technologies: ["Python", "Machine Learning", "AI", "Data Analysis"],
            links: [
                { text: "Research Poster: HAR _ URI 2023", url: "#" }
            ]
        },
        {
            title: "App Development Internship",
            company: "University of Rhode Island, Dept. of Biotechnology",
            duration: "July 2022 - Aug 2022",
            description: "Developed a CareWell App module, a clinical dashboard for a digital health platform for caregivers of dementia. Built Analytics Dashboard, analyzed requirements & design doc. Presented app demo to post-grad and hospital reps who were interested in the product.",
            technologies: ["App Development", "Dashboard Design", "Healthcare Tech", "Analytics"],
            links: [
                { text: "Carewell Clinical Dashboard- Demo Slides", url: "#" },
                { text: "Demo Video", url: "#" }
            ]
        },
        {
            title: "Sharon High School HelpDesk Internship",
            company: "Sharon High School",
            duration: "September 2021 - June 2024",
            description: "Conducted research on neural networks. Co-managed printers and copiers for 2 years. Developed a school appointment system for shared laptops and iPads, implemented across 3 elementary schools.",
            technologies: ["System Administration", "Neural Networks", "JavaScript", "Web Development"],
            links: []
        }
    ];

    return (
        <section id="experience" className="experience-section">
            <h2 className="section-title">Experience</h2>
            <div className="timeline">
                <div className="timeline-line"></div>
                {experiences.map((exp, index) => (
                    <div key={index} className="timeline-item">
                        <div className="timeline-date">{exp.duration}</div>
                        <div className="experience-card">
                            <div className="experience-header">
                                <h3 className="experience-title">{exp.title}</h3>
                                <p className="experience-company">{exp.company}</p>
                            </div>
                            <div className="experience-description">
                                <p>{exp.description}</p>
                            </div>
                            <div className="experience-technologies">
                                {exp.technologies.map((tech, techIndex) => (
                                    <span key={techIndex} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                            {exp.links.length > 0 && (
                                <div className="experience-links">
                                    {exp.links.map((link, linkIndex) => (
                                        <a key={linkIndex} href={link.url} className="experience-link" target="_blank" rel="noopener noreferrer">
                                            {link.text}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ExperienceSection;
