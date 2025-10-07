import './Education.css';

const Education = () => {
    const educationData = [
        {
            id: 1,
            period: "2022 - 2025",
            degree: "Computer Science Engineering",
            institution: "National School of Computer Science (ENSI)",
            location: "Manouba, Tunisia",
            status: "Computer Science Engineering Graduate",
            description: "Engineering studies in computer science with focus on software engineering, artificial intelligence, and data analysis.",
            achievements: [
                "Specializing in Software Engineering and Artificial Intelligence",
                "Strong foundation in algorithms, data structures, and system design",
                "Active participation in technical clubs and programming competitions"
            ],
            courses: ["Algorithms & Data Structures", "Software Engineering", "Database Systems", "Web Development", "Artificial Intelligence", "Machine Learning", "Computer Networks", "Operating Systems"]
        },
        {
            id: 2,
            period: "2020 - 2022",
            degree: "Preparatory School Diploma",
            institution: "Preparatory Institute for Engineering Studies of Monastir (IPEIM)",
            location: "Monastir, Tunisia",
            status: "Physics-Chemistry Major",
            description: "Intensive two-year program preparing for national engineering school entrance exams.",
            achievements: [
                "Rigorous training in mathematics and physical sciences",
                "Development of strong analytical and problem-solving skills",
                "Preparation for competitive engineering school entrance exams"
            ],
            courses: ["Advanced Mathematics", "Physics", "Chemistry", "Computer Science", "Engineering Sciences", "French", "English"]
        },
        {
            id: 3,
            period: "2016 - 2020",
            degree: "Scientific Baccalaureate",
            institution: "Lycée Shikha Kairouan",
            location: "Kairouan, Tunisia",
            status: "Graduated with Honors",
            description: "Secondary education with specialization in mathematics and experimental sciences.",
            achievements: [
                "Specialized in Mathematics and Experimental Sciences",
                "Developed strong foundation in scientific reasoning",
                "Excellent academic performance throughout secondary education"
            ],
            courses: ["Mathematics", "Physics", "Chemistry", "Computer Science", "Philosophy", "History & Geography","French", "English"]
        }
    ];

    return (
        <section className="education" id="education">
            <div className="education-container">
                <div className="education-header">
                    <h1 className="education-title">Education</h1>
                    <div className="title-underline"></div>
                    <p className="education-subtitle">
                        My academic journey in computer science and engineering
                    </p>
                </div>

                <div className="education-content">
                    {/* Academic Timeline */}
                    <div className="academic-section">
                        <div className="timeline">
                            {educationData.map((edu, index) => (
                                <div key={edu.id} className="timeline-item">
                                    <div className="timeline-marker">
                                        <div className="marker-icon">🎓</div>
                                        {index !== educationData.length - 1 && <div className="timeline-line"></div>}
                                    </div>
                                    <div className="timeline-content">
                                        <div className="timeline-header">
                                            <div className="degree-info">
                                                <h3 className="degree">{edu.degree}</h3>
                                                <span className="institution">{edu.institution}</span>
                                            </div>
                                            <div className="timeline-meta">
                                                <span className="period">{edu.period}</span>
                                                <span className="location">📍 {edu.location}</span>
                                            </div>
                                        </div>
                                        
                                        <div className="status-badge">
                                            {edu.status}
                                        </div>
                                        
                                        <p className="education-description">{edu.description}</p>
                                        
                                        <div className="achievements">
                                            <h4>Key Highlights</h4>
                                            <ul>
                                                {edu.achievements.map((achievement, idx) => (
                                                    <li key={idx}>{achievement}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="courses">
    <h4>Relevant Coursework</h4>
    <div className="course-tags">
        {edu.courses.map((course, idx) => (
            <span key={idx} className="course-tag">{course}</span>
        ))}
        <span className="course-tag more">...</span>
    </div>
</div>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;