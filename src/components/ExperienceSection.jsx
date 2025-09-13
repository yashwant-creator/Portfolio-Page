import React from 'react';

const ExperienceSection = () => {
    const experiences = [
                {
            title: "Paid Machine Learning Engineering Intern - Retrieval-Augmented Generation Chatbot for Polycystic Kidney Disease(PKD)",
            company: "University of Rhode Island, Dept. of Biotechnology & Brown University",
            duration: "July 2025 - Present",
            description: `Built a retrieval-augmented generation (RAG) chatbot for Polycystic Kidney Disease patients using Python, Flutter, and OpenAI’s GPT-4o-mini
\nProcessed 50+ medical research papers into embeddings, stored in a vector database, and integrated FAISS similarity search for accurate retrieval
\nImplemented an async, multi-threaded backend to deliver responsive, medically grounded, and empathetic chatbot interactions
`,
            technologies: ["RAGbot", "Vector Database", "Embeddings", "Python", "Computer Engineering", "Research"],
            links: [{text: "View Team Pic", url: "https://drive.google.com/file/d/12YYPotxw6keX5WZ_UiXeQJXoCtjJKa7A/view?usp=sharing"},
                {text: "View Architechture Slides", url: "https://docs.google.com/presentation/d/1htXXNUh-LC4aqZ4VRapKp-wmgP0AdSKHrW9jEtecFaQ/edit?usp=sharing"},
                {text: "View Website", url: "https://polycystickidney.streamlit.app/"},
                {text: "View Demo", url: "https://drive.google.com/file/d/1VBj4l25Kb0ZMVLsEGoC3mwSRuz583jer/view?usp=sharing"},
                ]
        },

        {
            title: "Computer Hardware Engineering Intern",
            company: "University of Rhode Island, Dept. of Biotechnology",
            duration: "July 2024 - Aug 2024",
            description: "Conducted research, designed & built \"Neeru\", a smart water bottle accessory to combat dehydration. Presented research poster at MIT Conference (IEEE MIT URTC 2024).",
            technologies: ["Research", "Hardware Design", "IEEE", "3D Printing", "Circuit Design", "Computer Engineering"],
            links: [{text: "MIT URTC Certificate TBD", url: ""},
                 {text: "View Internship Certificate", url: "https://drive.google.com/file/d/1T8w_yqsrmewrZ7hrsyDhMF3Wa412WJOp/view?usp=sharing"},
                 {text: "View Project Slides", url: "https://docs.google.com/presentation/d/1d4w7iVDirMmx7pPqHRNf-CikE3qAvhLT_fWHHr1Umi4/edit?usp=sharing"}
                ]
        },
        {
            title: "Summer program: Application of AI in Finance Industry",
            company: "University of California San Diego",
            duration: "July 2024 - Aug 2024",
            description: "Learnt & built applications for predictive modeling in finance, banking, wealth, asset mgmt., & fraud detection using AI Technology. Received 2.5 credits from University of California San Diego.",
            technologies: ["AI", "Finance", "Predictive Modeling", "Python", "Fintech"],
            links: [
                { text: "View AI + Finance Certificate", url: "https://drive.google.com/file/d/1MCfo0x6IFty9Tu9joIqztdy9O2jQhwhj/view?usp=sharing" }
            ]
        },
        {
            title: "Machine Learning Engineering Internship",
            company: "University of Rhode Island, Dept. of Biotechnology",
            duration: "July 2023 - Aug 2023",
            description: "Built an AI model (under guidance of a URI mentor) to detect activity types on a smartwatch, used in an ADHD study to track and predict the onset of ADHD in children aged 7-11.",
            technologies: ["Python", "Machine Learning", "AI", "Data Analysis", "K-Means clustering algorithm"],
            links: [
                { text: "View Research Poster: Human Activity Recongnition 2023", url: "https://docs.google.com/presentation/d/1TiVOjGnX01dvvkBp6vhvQEVISsh5gKl-wf3O2QzNNOE/edit?usp=sharing" }
            ]
        },
        {
            title: "Software Engineering Internship",
            company: "University of Rhode Island, Dept. of Biotechnology",
            duration: "July 2022 - Aug 2022",
            description: "Developed a CareWell App module, a clinical dashboard for a digital health platform for caregivers of dementia. Built Analytics Dashboard, analyzed requirements & design doc. Presented app demo to post-grad and hospital reps who were interested in the product.",
            technologies: ["App Development", "Dashboard Design", "Healthcare Tech", "Analytics"],
            links: [
                { text: "View Carewell Clinical Dashboard Slides", url: "https://docs.google.com/presentation/d/1m3HWPYzw26zsX33V6mhjOto0HqQ3V6mgURk3KuZ2QvA/edit?usp=sharing" },
                { text: "View Demo Video", url: "https://drive.google.com/file/d/1hceekMAfpG0NEkgR2XVunOQBtkqomm5r/view?usp=sharing" }
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
