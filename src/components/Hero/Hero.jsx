import { useState, useEffect } from "react";
import "./Hero.css";
import profile_img from '../../assets/profile-img.png';
import { Link } from "react-router-dom";

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        
        // Vérifier si on est sur mobile
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    const handleDownload = () => {
        const cvURL = "/ResumeTaheniDziri.pdf";
        const link = document.createElement("a");
        link.href = cvURL;
        link.download = "Taheni_Dziri_CV.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const scrollToContact = () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    const openLinkedIn = () => {
        window.open("https://www.linkedin.com/in/taheni-dziri-367571246/", "_blank", "noopener,noreferrer");
    };

    return (
        <section className={`hero ${isVisible ? "hero-visible" : ""} ${isMobile ? "mobile-view" : ""}`}>
            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-image-section">
                        <div className="image-wrapper">
                            <img 
                                src={profile_img} 
                                alt="Taheni Dziri - Software Engineer" 
                                className="profile-image"
                                loading="eager"
                            />
                            <div className="image-glow"></div>
                            <div className="floating-circles">
                                <div className="floating-circle circle-1"></div>
                                <div className="floating-circle circle-2"></div>
                                <div className="floating-circle circle-3"></div>
                            </div>
                        </div>
                    </div>

                    <div className="hero-text">
                        <div className="hero-badge">
                            <span>Software Engineer</span>
                        </div>
                        
                        <h1 className="hero-title">
                            <span className="title-gradient">Hi, I'm Taheni Dziri</span>
                            <span className="title-subtitle">Crafting Digital Excellence</span>
                        </h1>
                        
                        <p className="hero-description">
                            I'm a passionate <strong>Software Engineer</strong> dedicated to solving complex problems 
                            and building efficient, high-quality applications. With expertise in full-stack development 
                            and system architecture, I focus on creating innovative solutions that enhance user experiences 
                            and optimize performance.
                        </p>

                        <div className="hero-actions">
                            <button 
                                onClick={handleDownload} 
                                className="btn btn-primary"
                                aria-label="Download Resume"
                            >
                                Download Resume
                            </button>
                            
                            <Link 
                                to="/contact" 
                                className="btn btn-secondary"
                                onClick={scrollToContact}
                                aria-label="Contact me"
                            >
                                Let's Connect
                            </Link>
                        </div>

                        <div className="hero-social">
                            <span className="social-label">Follow me on</span>
                            <div className="social-links">
                                <a 
                                    href="https://www.linkedin.com/in/taheni-dziri-367571246/" 
                                    className="social-link"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        openLinkedIn();
                                    }}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Visit LinkedIn profile"
                                >
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

 
            </div>
        </section>
    );
};

export default Hero;