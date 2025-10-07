import './About.css';

const About = () => {
    const skills = [
        { 
            category: "Frontend Development", 
            technologies: ["React.js", "JavaScript", "TypeScript", "HTML/CSS", "Tailwind CSS"],
            level: 90
        },
        { 
            category: "Backend & Databases", 
            technologies: ["Node.js","NestJS", "Python", "Express.js", "SQL", "MongoDB", "PHP"],
            level: 85
        },
        { 
            category: "DevOps & Cloud", 
            technologies: ["Docker", "CI/CD", "Git", "Linux"],
            level: 80
        },
        { 
            category: "Data & AI", 
            technologies: ["Python", "Power BI", "Data Analysis", "Machine Learning", "Pandas"],
            level: 75
        }
    ];

    const expertise = [
        { title: "Full-Stack Development", description: "Building scalable web applications from frontend to backend" },
        { title: "Data-Driven Solutions", description: "Creating insights and value from complex datasets" },
        { title: "System Architecture", description: "Designing robust and maintainable software systems" },
        { title: "Performance Optimization", description: "Enhancing application speed and efficiency" }
    ];

    return (
        <section className='about' id="about">
            <div className="about-container">
                <div className="about-header">
                    <h1 className="about-title">
                        About <span className="title-accent">Me</span>
                    </h1>
                    <div className="title-underline"></div>
                    
                </div>
                
                <div className='about-content'>
                    {/* Section Texte à Gauche */}
                    <div className="about-text-section">
                        <div className="intro-text">
                            <h2 className="intro-title">
                                Turning Ideas Into <span className="highlight">Digital Reality</span>
                            </h2>
                            <p className="intro-description">
                                I'm a <strong>Software Engineer</strong> with expertise in Artificial Intelligence, 
                                Data Analysis, DevOps, and Full-Stack Development. With strong skills in 
                                <strong> Python, SQL, React.js, and cloud technologies</strong>, I specialize in 
                                designing and optimizing data-driven solutions that drive business value.
                            </p>
                        </div>

                        <div className="expertise-section">
                            <h3 className="expertise-title">Areas of Expertise</h3>
                            <div className="expertise-grid">
                                {expertise.map((item, index) => (
                                    <div key={index} className="expertise-card">
                                        <div className="expertise-number">0{index + 1}</div>
                                        <div className="expertise-content">
                                            <h4 className="expertise-item-title">{item.title}</h4>
                                            <p className="expertise-item-description">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                       
                    </div>

                    {/* Section Skills à Droite */}
                    <div className="skills-section">
                        <div className="skills-header">
                            <h3 className="skills-title">Technical Skills</h3>
                            <p className="skills-subtitle">My proficiency across different technologies</p>
                        </div>

                        <div className="skills-container">
                            {skills.map((skillCategory, index) => (
                                <div key={index} className="skill-category">
                                    <div className="category-header">
                                        <h4 className="category-title">{skillCategory.category}</h4>
                                        <div className="category-level">
                                            <div className="level-bar">
                                                <div 
                                                    className="level-progress" 
                                                    style={{ width: `${skillCategory.level}%` }}
                                                ></div>
                                            </div>
                                            <span className="level-percentage">{skillCategory.level}%</span>
                                        </div>
                                    </div>
                                    
                                    <div className="technologies-list">
                                        {skillCategory.technologies.map((tech, techIndex) => (
                                            <span key={techIndex} className="technology-tag">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="skills-highlights">
                            <h4 className="highlights-title">Key Strengths</h4>
                            <div className="highlights-grid">
                                <div className="highlight-item">
                                    <div className="highlight-bullet"></div>
                                    <span>Problem Solving & Algorithm Design</span>
                                </div>
                                <div className="highlight-item">
                                    <div className="highlight-bullet"></div>
                                    <span>System Architecture & Scalability</span>
                                </div>
                                <div className="highlight-item">
                                    <div className="highlight-bullet"></div>
                                    <span>Data Analysis & Visualization</span>
                                </div>
                                <div className="highlight-item">
                                    <div className="highlight-bullet"></div>
                                    <span>Cloud Infrastructure & DevOps</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;