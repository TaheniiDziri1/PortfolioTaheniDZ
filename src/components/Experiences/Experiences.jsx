import './Experiences.css';
import { useState } from 'react';

const Experiences = () => {
    const [selectedExperience, setSelectedExperience] = useState(null);

    const experiencesData = [
        {
            id: 1,
            period: "Feb 2024 - Jul 2024",
            title: "Software Development & Mobile Supervision",
            company: "Naxxum Group",
            type: "Final Year Internship",
            achievements: [
                "Designed a supervision solution for mobile application lifecycle management",
                "Developed a cross-platform Java/Kotlin SDK with event tracking and performance analysis",
                "Automated CI/CD process with GitHub Actions for debug and release version generation",
                "Implemented a manual build distribution system for testers"
            ],
            technologies: ["Java","React.js","NestJS", "Kotlin", "GitHub Actions", "CI/CD", "Mobile Development"],
            category: "mobile",
            details: {
                duration: "6 months",
                teamSize: "2 developers",
                methodologies: ["Agile", "Scrum"],
                tools: ["Android Studio", "GitHub", "Firebase"],
                impact: "Improved mobile app quality monitoring and reduced bug detection time."
            }
        },
        {
            id: 2,
            period: "Jun 2024 - Aug 2024",
            title: "Automated Dashboard Development",
            company: "SFM Technologies",
            type: "Summer Internship",
            achievements: [
                "Created an automated dashboard for the Electronic Communications Market Observatory",
                "Developed for ARCT (Regulatory Authority)",
                "Implemented data visualization and analysis features",
                "Optimized reporting and monitoring processes"
            ],
            technologies: ["Business Intelligence", "Data Visualization", "Automation", "Dashboard"],
            category: "data",
            details: {
                duration: "3 months",
                teamSize: "1 developers",
                methodologies: ["Waterfall"],
                tools: ["Power BI", "SQL Server", "Excel"],
                impact: "Reduced manual reporting time by 60% and improved data accuracy"
            }
        },
        {
            id: 3,
            period: "Jul 2023 - Aug 2023",
            title: "Business Intelligence Solution",
            company: "Sagemcom Tunisia",
            type: "Summer Internship",
            achievements: [
                "Developed a BI solution to automate process tracking",
                "Facilitated sales and purchase operations monitoring",
                "Created automated reports and managerial dashboards",
                "Improved business process efficiency"
            ],
            technologies: ["Business Intelligence", "Automation", "Reporting", "Process Management"],
            category: "business",
            details: {
                duration: "2 months",
                teamSize: "1 developers",
                methodologies: ["Agile"],
                tools: ["Tableau", "MySQL", "Python"],
                impact: "Streamlined sales tracking and improved decision-making process"
            }
        },
        {
            id: 4,
            title: "AI-Powered Skin Analysis Tool",
            type: "Academic Project",
            achievements: [
                "Developed a skin analysis tool using deep learning",
                "Automatic detection of skin conditions with computer vision models",
                "Implementation of personalized recommendations based on analysis",
                "Use of generative AI for care suggestions"
            ],
            technologies: ["Python", "Deep Learning", "Computer Vision", "Generative AI", "TensorFlow"],
            category: "ai",
            details: {
                duration: "4 months",
                teamSize: "3 students",
                methodologies: ["Research & Development"],
                tools: ["TensorFlow", "OpenCV", "Streamlit"],
                impact: "Achieved 85% accuracy in skin condition detection and classification"
            }
        },
        {
            id: 5,
            title: "Autonomous Car with Computer Vision",
            type: "Innovation Project",
            achievements: [
                "Autonomous car model using YOLOv8 for object detection",
                "Trained on custom dataset for road element recognition",
                "Real-time navigation with intelligent path planning",
                "Implementation of computer vision algorithms for safety"
            ],
            technologies: ["Python", "YOLOv8", "Computer Vision", "Real-time", "AI", "OpenCV"],
            category: "innovation",
            details: {
                duration: "3 months",
                teamSize: "1 students",
                methodologies: ["Prototype Development"],
                tools: ["YOLOv8", "Python", "OpenCV", "Raspberry Pi"],
                impact: "Successfully implemented real-time object detection with 90% accuracy"
            }
        }
    ];

    const getCategoryColor = (category) => {
        const colors = {
            mobile: "linear-gradient(135deg, #B415FF, #6A0DAD)",
            data: "linear-gradient(135deg, #DF8908, #FF6B00)",
            business: "linear-gradient(135deg, #00C6FF, #0072FF)",
            ai: "linear-gradient(135deg, #FF0080, #FF8C00)",
            innovation: "linear-gradient(135deg, #667EEA, #764BA2)"
        };
        return colors[category] || "linear-gradient(135deg, #B415FF, #DF8908)";
    };

    const getCategoryIcon = (category) => {
        const icons = {
            mobile: "",
            data: "",
            business: "",
            ai: "",
            innovation: ""
        };
        return icons[category] || "";
    };

    const handleExperienceClick = (experience) => {
        setSelectedExperience(experience);
    };

    const closeDetails = () => {
        setSelectedExperience(null);
    };

    return (
        <div className='experiences' id="experiences">
            <div className="experiences-header">
                <h1 className="experiences-title">My Experiences</h1>
                <div className="title-underline"></div>
            
            </div>
            
            <div className="experiences-container">
                {experiencesData.map((experience, index) => (
                    <div 
                        key={experience.id} 
                        className="experience-card"
                        onClick={() => handleExperienceClick(experience)}
                        style={{ 
                            '--category-color': getCategoryColor(experience.category),
                            animationDelay: `${index * 0.1}s`
                        }}
                    >
                        <div className="experience-header">
                            <div className="experience-category">
                                <span className="category-icon">
                                    {getCategoryIcon(experience.category)}
                                </span>
                                <span className="category-badge">
                                    {experience.type}
                                </span>
                            </div>
                            {experience.period && (
                                <div className="experience-period">
                                    {experience.period}
                                </div>
                            )}
                        </div>

                        <div className="experience-content">
                            <h3 className="experience-title">{experience.title}</h3>
                            {experience.company && (
                                <p className="experience-company">{experience.company}</p>
                            )}
                            
                            <ul className="experience-achievements">
                                {experience.achievements.slice(0, 3).map((achievement, idx) => (
                                    <li key={idx} className="achievement-item">
                                        <span className="achievement-bullet"></span>
                                        {achievement}
                                    </li>
                                ))}
                                {experience.achievements.length > 3 && (
                                    <li className="achievement-item click-hint">
                                        <span className="achievement-bullet"></span>
                                        Click to view all {experience.achievements.length} achievements...
                                    </li>
                                )}
                            </ul>

                            <div className="experience-technologies">
                                {experience.technologies.map((tech, techIndex) => (
                                    <span key={techIndex} className="technology-tag">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="experience-gradient"></div>
                        <div className="click-indicator">
                            Click for details ↓
                        </div>
                    </div>
                ))}
            </div>

            {/* Experience Details Modal */}
            {selectedExperience && (
                <div className="experience-modal-overlay" onClick={closeDetails}>
                    <div className="experience-modal" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeDetails}>
                            ×
                        </button>
                        
                        <div className="modal-header">
                            <div className="modal-category">
                                <span className="category-icon">
                                    {getCategoryIcon(selectedExperience.category)}
                                </span>
                                <span className="category-badge">
                                    {selectedExperience.type}
                                </span>
                            </div>
                            <div className="modal-period">
                                {selectedExperience.period}
                            </div>
                        </div>

                        <h2 className="modal-title">{selectedExperience.title}</h2>
                        {selectedExperience.company && (
                            <p className="modal-company">{selectedExperience.company}</p>
                        )}

                        <div className="modal-details-grid">
                            <div className="detail-section">
                                <h4>Project Details</h4>
                                <div className="detail-items">
                                    <div className="detail-item">
                                        <span className="detail-label">Duration:</span>
                                        <span className="detail-value">{selectedExperience.details.duration}</span>
                                    </div>
                                    <div className="detail-item">
                                        <span className="detail-label">Team Size:</span>
                                        <span className="detail-value">{selectedExperience.details.teamSize}</span>
                                    </div>
                                    <div className="detail-item">
                                        <span className="detail-label">Methodologies:</span>
                                        <span className="detail-value">{selectedExperience.details.methodologies.join(', ')}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="detail-section">
                                <h4>Tools & Technologies</h4>
                                <div className="modal-technologies">
                                    {selectedExperience.technologies.map((tech, index) => (
                                        <span key={index} className="technology-tag large">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="detail-section">
                            <h4>Key Achievements</h4>
                            <ul className="modal-achievements">
                                {selectedExperience.achievements.map((achievement, idx) => (
                                    <li key={idx} className="modal-achievement-item">
                                        <span className="achievement-bullet"></span>
                                        {achievement}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="detail-section">
                            <h4>Impact & Results</h4>
                            <p className="impact-text">{selectedExperience.details.impact}</p>
                        </div>
                    </div>
                </div>
            )}

            
        </div>
    );
}

export default Experiences;